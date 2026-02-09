import Icon from "@/components/Sections/Hero/Icon";

function BookFreeCallButton({className = "", content="Book free call", iconName }) {
    return (
      <button className={`${className}`}>
        <div>
          <Icon iconName={iconName} size='20' alt={iconName}/>
        </div>
        <div>
          {content}
        </div>
      </button>
    );
  }
  
export default BookFreeCallButton;