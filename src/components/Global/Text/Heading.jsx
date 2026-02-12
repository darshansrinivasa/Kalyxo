function Heading({tag = "h1", className = "", children}) {
    const Tag = tag;
    return(
        <Tag className={className}>
            {children}
        </Tag>
    )
}

export default Heading;