import TagButton from "../../Global/Button/TagButton";
import Heading from "../../Global/Text/Heading";
import SubHeading from "../../Global/Text/SubHeading";
import Button from "../../Global/Button/Button";
import BannerImage from "../../Global/UI/BannerImage"

function Hero({
  className = "",
  contentClassName = "",
  tagProps,
  headingProps,
  subheadingProps,
  primaryBtnProps,
  secondaryBtnProps,
  imageProps
}) {
  return (
    <section className={className}>
      <div className={contentClassName}>
        {tagProps && <TagButton {...tagProps} />}

        {headingProps && <Heading {...headingProps} />}

        {subheadingProps && <SubHeading {...subheadingProps} />}

        <div className="flex flex-col md:flex-row gap-4">
          {primaryBtnProps && <Button {...primaryBtnProps} />}
          {secondaryBtnProps && <Button {...secondaryBtnProps} />}
        </div>
      </div>

      {imageProps && <BannerImage {...imageProps} /> }
    </section>
  );
}

export default Hero;