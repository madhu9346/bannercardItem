import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={className}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
    </li>
  )
}
export default BannerCardItem
