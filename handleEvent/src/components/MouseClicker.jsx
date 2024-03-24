export function MouseClicker({ name, imagesrc }) {
  
  function handleClick(event) {
    if (event.target.tagName === 'IMG') {
      console.log(event.target.src); 
      event.stopPropagation(); 
    } else {
      console.log(name); 
    }
  }
  
  return (
    <div onClick={handleClick}>
      <button>
        <img
          src={imagesrc}
          alt="Button Image"
          width={24}
          height={24}
        />
        Click Me!
      </button>
    </div>
  );
}