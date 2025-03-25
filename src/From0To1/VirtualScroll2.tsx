import { useState, useEffect } from "react";

export default function VirtualScroll2() {
  
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

  const [scrollTop, setScrollTop] = useState(0);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [offsetY, setOffsetY] = useState(0);

  const rowHeight = 53, BufferRows = 5;

  const tableData = Array.from({ length: 1000 }, (_, index) => ({
    name: `用户${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    address: ['北京', '上海', '广州', '深圳'][Math.floor(Math.random() * 4)],
  }));

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => { 
    setScrollTop(e.currentTarget.scrollTop);
  }

  useEffect(() => { 
    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - BufferRows);
    const endIndex = Math.min(tableData.length, Math.ceil(((scrollTop + rowHeight * 10) / rowHeight)  + BufferRows));
    const visibleData = tableData.slice(startIndex, endIndex);
    setVisibleData(visibleData);
    setOffsetY(startIndex * rowHeight);
  }, [scrollTop])

  return (
    <div style={{position: 'relative'}}>
      <div style={{ height: 53 * 11 + 'px', overflow: 'auto', border: '1px solid black' }}
        onScroll={handleScroll}
      >
        <div style={{ position: 'relative', height: 53 * 1001 + 'px', border: '1px solid red' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', position: 'absolute', top: offsetY }}>
            <thead style={{ position: 'sticky', top: 0, background: '#f5f5f5' }}>
              <tr style={{ height: rowHeight, border: '1px solid #ccc' }}>
                {
                  columns.map((column) => (
                    <th key={column.key}>{column.title}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                visibleData.map((row, index) => (
                  <tr key={index} style={{ height: rowHeight, border: '1px solid #ccc' }}>
                    {
                      columns.map((column) => (
                        <td key={column.key}>{row[column.key]}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  ) 
}