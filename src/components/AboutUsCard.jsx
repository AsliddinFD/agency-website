export default function AboutUsCard({ image, name }) {
    return (
        <div className="image-box">
            <img src={image} alt="" />
            <div className="overlay-text">
                <h4>{name}</h4>
            </div>
        </div>
    )
}