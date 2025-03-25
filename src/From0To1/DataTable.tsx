// 数据表格组件
//
// 中级到高级
//
// 可排序表头
// 分页功能
// 搜索过滤
// 自定义列渲染
// 加载状态
// 表格行选择功能

import { Fragment, useState, useEffect} from "react"

type SortDirection = 'asc' | 'desc' | null;

interface SortState {
  key: string;
  direction: SortDirection;
}

export default function DataTable() {
  const columns = [
    {
      key: "name",
      title: "姓名",
      sortable: true,
      filterable: true,
    },
    {
      key: "age",
      title: "年龄",
      sortable: true,
    },
    {
      key: "address",
      title: "地址",
      render: (value: string) => <div style={{ color: "blue" }}>{value}</div>,
    },
  ];
  const [sortState, setSortState] = useState<SortState>({ key: '', direction: null });
  const [filters, setFilters] = useState<Record<string, string>>({});
  // 添加加载状态
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<Array<{
    name: string;
    age: number;
    address: string;
  }>>([]);

  useEffect(() => {
    const mockData = [
      { name: "张三", age: 25, address: "北京" },
      { name: "李四", age: 30, address: "上海" },
      { name: "王五", age: 28, address: "广州" },
    ];

    const fetchData = async () => {
      setLoading(true);
      try {
        // 模拟 API 调用延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTableData(mockData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 处理排序逻辑
  const handleSort = (key: string, event: React.MouseEvent) => {
    // 如果点击的是输入框，不触发排序
    if ((event.target as HTMLElement).tagName === 'INPUT') {
      return;
    }

    const column = columns.find(col => col.key === key);
    if (!column?.sortable) return;

    let direction: SortDirection = 'asc';
    if (sortState.key === key) {
      if (sortState.direction === 'asc') direction = 'desc';
      else if (sortState.direction === 'desc') direction = null;
      else direction = 'asc';
    }
    setSortState({ key, direction });
  };

  // 获取排序后的数据
  const getSortedData = (dataToSort: typeof tableData) => {
    if (!sortState.direction) return dataToSort;

    return [...dataToSort].sort((a, b) => {
      const aValue = a[sortState.key as keyof typeof a];
      const bValue = b[sortState.key as keyof typeof b];

      if (sortState.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };

  // 渲染排序指示器
  const renderSortIndicator = (column: typeof columns[0]) => {
    if (!column.sortable) return null;
    
    if (sortState.key !== column.key) {
      return <span style={{ marginLeft: 5 }}>↕</span>;
    }
    
    return (
      <span style={{ marginLeft: 5 }}>
        {sortState.direction === 'asc' ? '↑' : sortState.direction === 'desc' ? '↓' : '↕'}
      </span>
    );
  };

  // 获取过滤后的数据
  const getFilteredData = () => {
    let filteredData = [...tableData];
    
    Object.entries(filters).forEach(([key, filterValue]) => {
      if (filterValue) {
        filteredData = filteredData.filter(row => {
          const value = String(row[key as keyof typeof row]).toLowerCase();
          return value.includes(filterValue.toLowerCase());
        });
      }
    });

    return filteredData;
  };

  // 获取最终要显示的数据（先过滤后排序）
  const getDisplayData = () => {
    const filteredData = getFilteredData();
    return getSortedData(filteredData);
  };

  // 处理过滤变化
  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 渲染过滤输入框
  const renderFilterInput = (column: typeof columns[0]) => {
    if (!column.filterable) return null;

    return (
      <input
        type="text"
        value={filters[column.key] || ''}
        onChange={(e) => handleFilterChange(column.key, e.target.value)}
        placeholder={`搜索${column.title}...`}
        style={{
          width: '100%',
          padding: '4px',
          marginTop: '4px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    );
  };

  // 加载状态组件
  const LoadingOverlay = () => (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div>加载中...</div>
    </div>
  );

  return (
     <Fragment>
      <h5>高级：DataTable</h5>
      <div style={{ position: 'relative' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ display: 'flex', flexDirection: 'row'}}>
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{
                    padding: '12px',
                    borderBottom: '2px solid #ddd',
                    textAlign: 'left',
                    backgroundColor: '#f5f5f5',
                    flex: 1,
                    cursor: column.sortable ? 'pointer' : 'default'
                  }}
                  onClick={(e) => handleSort(column.key, e)}
                >
                  <div>
                    { column.title }
                    { renderSortIndicator(column) }
                  </div>
                  { renderFilterInput(column) }
                </th>

              ))}
            </tr>
          </thead>
          <tbody>
            {getDisplayData().map((row, rowIndex) => (
              <tr key={rowIndex} style={{ display: 'flex', flexDirection: 'row'}}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={{
                      padding: '12px',
                      flex: 1,
                      borderBottom: '1px solid #ddd'
                    }}
                  >
                    {column.render
                      ? column.render(row[column.key as keyof typeof row] as string)
                      : row[column.key as keyof typeof row]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <LoadingOverlay />}
      </div>
    </Fragment>
  )
}