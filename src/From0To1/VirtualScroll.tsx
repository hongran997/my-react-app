import { useState, useRef, useEffect, Fragment } from "react";

export default function VirtualScroll() { 
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
  // 虚拟滚动相关状态
  const [tableData, setTableData] = useState<Array<{
    name: string;
    age: number;
    address: string;
  }>>([]);
  const [loading, setLoading] = useState(true);
  const [scrollTop, setScrollTop] = useState(0); // 表示元素已经滚动的高度
  const containerRef = useRef<HTMLDivElement>(null);
  const ROW_HEIGHT = 53; // 行高（包含padding和border）
  const VISIBLE_ROWS = 10; // 可见行数
  const BUFFER_ROWS = 5; // 上下缓冲行数

  // 生成更多的测试数据
  useEffect(() => {
    const mockData = Array.from({ length: 1000 }, (_, index) => ({
      name: `用户${index + 1}`,
      age: Math.floor(Math.random() * 50) + 20,
      address: ['北京', '上海', '广州', '深圳'][Math.floor(Math.random() * 4)],
    }));

    const fetchData = async () => {
      setLoading(true);
      try {
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

  // 处理滚动事件
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  // 计算虚拟滚动相关数据
  const getVirtualizedData = () => {
    const displayData = tableData; // 获取过滤和排序后的数据
    const totalHeight = displayData.length * ROW_HEIGHT;
    
    const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - BUFFER_ROWS);
    const endIndex = Math.min(
      displayData.length,
      Math.ceil((scrollTop + VISIBLE_ROWS * ROW_HEIGHT) / ROW_HEIGHT) + BUFFER_ROWS
    );
    
    const visibleData = displayData.slice(startIndex, endIndex);
    const offsetY = startIndex * ROW_HEIGHT;

    return {
      visibleData,
      totalHeight,
      offsetY,
    };
  };

  const { visibleData, totalHeight, offsetY } = getVirtualizedData();

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
        <div
          ref={containerRef}
          style={{
            height: `${VISIBLE_ROWS * ROW_HEIGHT}px`,
            overflow: 'auto' 
          }}
          onScroll={handleScroll}
        >
          <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
            <table 
              style={{ 
                borderCollapse: 'collapse', 
                width: '100%',
                position: 'absolute',
                top: `${offsetY}px`
              }}
            >
              <thead style={{ position: 'sticky', top: 0, backgroundColor: '#f5f5f5', zIndex: 1 }}>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      style={{
                        padding: '12px',
                        borderBottom: '2px solid #ddd',
                        textAlign: 'left',
                        backgroundColor: '#f5f5f5',
                        cursor: column.sortable ? 'pointer' : 'default'
                      }}
                    >
                      <div>
                        {column.title}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleData.map((row, rowIndex) => (
                  <tr 
                    key={rowIndex}
                    style={{
                      height: `${ROW_HEIGHT}px`,
                    }}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        style={{
                          padding: '12px',
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
          </div>
        </div>
        {loading && <LoadingOverlay />}
      </div>
    </Fragment>
  );

}