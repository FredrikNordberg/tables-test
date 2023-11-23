import React, { useState } from "react";
import data from "./mock-data.json";
import "./styles.css";

function App() {
  const [objects, setObjects] = useState(data);
  const [editingRow, setEditingRow] = useState(null);

  const handleEditRow = (rowIndex) => {
    setEditingRow(rowIndex === editingRow ? null : rowIndex);
  };

  const handleCellChange = (e, rowIndex, columnName) => {
    if (
      columnName === "ProductName" ||
      columnName === "ProductStyle" ||
      columnName === "ProductConfig"
    ) {
      const updatedObjects = objects.map((obj, idx) => {
        if (idx === rowIndex) {
          return { ...obj, [columnName]: e.target.value };
        }
        return obj;
      });
      setObjects(updatedObjects);
    }
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <th>Product name</th>
          <th>Manufacturer item id</th>
          <th>Product id</th>
          <th>Product style</th>
          <th>Product config</th>
          <th>Product group</th>
          <th>Manufacturer</th>
          <th>Special item</th>
          <th>No returns</th>
          <th>Buyer group</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {objects.map((object, rowIndex) => (
            <tr
              key={rowIndex}
              className={editingRow === rowIndex ? "editing-row" : ""}
            >
              {Object.keys(object).map((key, colIndex) => (
                <td key={colIndex}>
                  {editingRow === rowIndex &&
                  (key === "ProductName" ||
                    key === "ProductStyle" ||
                    key === "ProductConfig") ? (
                    <input
                      type="text"
                      value={object[key]}
                      onChange={(e) => handleCellChange(e, rowIndex, key)}
                    />
                  ) : (
                    object[key]
                  )}
                </td>
              ))}
              <td>
                <button
                  onClick={() => handleEditRow(rowIndex)}
                  className={editingRow === rowIndex ? "active" : ""}
                >
                  {editingRow === rowIndex ? "SAVE" : "EDIT"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import data from "./mock-data.json";

// import "./styles.css";

// function App() {
//   const [objects, setObjects] = useState(data);
//   const [editingCell, setEditingCell] = useState(null);

//   const handleCellClick = (rowIndex, columnName, currentValue) => {
//     if (columnName === "ProductName" || columnName === "ProductStyle" || columnName === "ProductConfig") {
//       setEditingCell({ row: rowIndex, column: columnName, value: currentValue });
//     }
//   };

//   const handleCellChange = (e, rowIndex, columnName) => {
//     const updatedObjects = [...objects];
//     updatedObjects[rowIndex][columnName] = e.target.value;
//     setObjects(updatedObjects);
//     setEditingCell(null);
//   };

//   return (
//     <div className="app-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Product name</th>
//             <th>Manufacturer item id</th>
//             <th>Product id</th>
//             <th>Product style</th>
//             <th>Product config</th>
//             <th>Product group</th>
//             <th>Manufacturer</th>
//             <th>Special item</th>
//             <th>No returns</th>
//             <th>Buyer group</th>
//           </tr>
//         </thead>
//         <tbody>
//           {objects.map((object, rowIndex) => (
//             <tr key={rowIndex}>
//               <td onClick={() => handleCellClick(rowIndex, "ProductName", object.ProductName)}>
//                 {editingCell?.row === rowIndex && editingCell?.column === "ProductName" ? (
//                   <input
//                     type="text"
//                     value={editingCell.value}
//                     onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleCellChange(e, rowIndex, "ProductName");
//                       }
//                     }}
//                     onFocus={(e) => e.target.select()}
//                   />
//                 ) : (
//                   object.ProductName
//                 )}
//               </td>
//               <td>{object.ManufacturerItemId}</td>
//               <td>{object.ProductId}</td>
//               <td onClick={() => handleCellClick(rowIndex, "ProductStyle", object.ProductStyle)}>
//                 {editingCell?.row === rowIndex && editingCell?.column === "ProductStyle" ? (
//                   <input
//                     type="text"
//                     value={editingCell.value}
//                     onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleCellChange(e, rowIndex, "ProductStyle");
//                       }
//                     }}
//                     onFocus={(e) => e.target.select()}
//                   />
//                 ) : (
//                   object.ProductStyle
//                 )}
//               </td>
//               <td onClick={() => handleCellClick(rowIndex, "ProductConfig", object.ProductConfig)}>
//                 {editingCell?.row === rowIndex && editingCell?.column === "ProductConfig" ? (
//                   <input
//                     type="text"
//                     value={editingCell.value}
//                     onChange={(e) => setEditingCell({ ...editingCell, value: e.target.value })}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleCellChange(e, rowIndex, "ProductConfig");
//                       }
//                     }}
//                     onFocus={(e) => e.target.select()}
//                   />
//                 ) : (
//                   object.ProductConfig
//                 )}
//               </td>
//               <td>{object.ProductGroup}</td>
//               <td>{object.Manufacturer}</td>
//               <td>{object.SpecialItem}</td>
//               <td>{object.NoReturns}</td>
//               <td>{object.BuyerGroup}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
