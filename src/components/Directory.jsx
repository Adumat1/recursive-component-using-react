// import { useEffect, useState } from "react";

// const Directory = ({ files }) => {
//     const [isExpanded, toggleExpanded] = useState(false);
//     const [isExpandeds, toggleExpandeds] = useState(false);

//     const d = (file) => {
//         if (file.isHeader) {
//             return (
//                 <div className="folder">
//                     <>
//                         <h2 className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>{file.name}</h2><hr />
//                         <>
//                             {
//                                 isExpanded && file.items.map((item) => <Directory files={item} />)
//                             }
//                         </>
//                     </>
//                 </div>
//             )
//         }
//     }

//     const gh = (fil) => {
//         toggleExpandeds(!isExpandeds)
//         isExpandeds && d(fil)
//     }
//     return (
//         <>
//             {files?.map(fil =>
//                 // <>
//                 //     <h3 className="file-name" onClick={() => d(fil)}>{fil.name}</h3><br />
//                 // </>
//                 <div className="folder" key={fil.id}>
//                     <>
//                         <h2 className="folder-title" onClick={() => toggleExpandeds(!isExpandeds)}>{fil.name}</h2><hr />
//                         <>
//                             {
//                                 isExpandeds && d(fil)
//                             }
//                         </>
//                     </>
//                 </div>
//             )
//             }
//         </>
//     )
// }

// export default Directory;


import { useState } from "react";

const Directory = ({ files }) => {
    const [isExpanded, toggleExpanded] = useState(false);

    return (
        <>
            {files.type === 'folder' && <div className="folder">
                <h2 className="folder-title" onClick={() => toggleExpanded(!isExpanded)}>{files.name}</h2><hr />
                {
                    isExpanded && files?.items?.map((item) => <Directory key={item.name} files={item} />)
                }
            </div>}
            {files.type !== 'folder' && <><h3 className="file-name">{files.name}</h3><br /></>}
        </>
    )
}

export default Directory;