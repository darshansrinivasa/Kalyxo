function Heading({tag = "h1", className = "", children}) {
    const Tag = tag;
    // debugger;
    // let content = {children};
    // let contentBefore = content.split('<p>').first;

    // debugger;
    return(
        <Tag className={className}>
            {children}
        </Tag>
    )
}

export default Heading;