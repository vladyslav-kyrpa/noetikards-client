export default function Button({ onClick, children, className = "" }) {
    const styles = `p-2 bg-on-surface rounded-item 
        hover:bg-on-surface-highlight 
        transition duration-100 ease-in-out`;

    return <button className={`${styles} ${className}`} onClick={onClick}>
        {children}
    </button>
}