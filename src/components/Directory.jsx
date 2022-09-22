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