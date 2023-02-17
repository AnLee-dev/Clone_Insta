export const Arrow = (props: any) => {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow h-[30px] w-[30px] fill-c2 ${
          props.left ? "arrow--left rotate-180" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm-.6 15.4-1.5-1.5 2.9-2.9-2.9-2.9 1.5-1.5 4.3 4.4-4.3 4.4z"></path>
        )}
        {!props.left && (
          <path d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm-.6 15.4-1.5-1.5 2.9-2.9-2.9-2.9 1.5-1.5 4.3 4.4-4.3 4.4z"></path>
        )}
      </svg>
    );
  }