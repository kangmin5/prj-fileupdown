import { useState } from "react"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    const handleClick=() => {
            setOpen(!open)
    }
    
    if(item.childrens){
        return (
            <>
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">

                    <span  onClick={handleClick}>
                        {open ? (
                            <i className="bi-dash-square" />
                            ) : (
                                <i className="bi-plus-square" />
                        )}
                            {item.title}  
                    </span>

                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
            </>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {/* { item.icon && <i className={item.icon}></i> } */}
                {item.title}
            </a>
        )
    }
}