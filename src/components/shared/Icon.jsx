export default function Icon({ size, className = "", src, alt }) {
    let sizePx = 32;
    if (size == "small")
        sizePx = 24;
    if (size == "large")
        sizePx = 48;

    return <div className={className}>
        <img src={src} height={sizePx} width={sizePx} alt={alt} className="invert" />
    </div>

}