import TagButton from "../../Global/Button/TagButton";
import Heading from "../../Global/Text/Heading";
import SubHeading from "../../Global/Text/SubHeading";
import Button from "../../Global/Button/Button";
import BannerImage from "../../Global/UI/BannerImage"
import ServiceFeature from "./ServiceFeatures";

function Services({
  outerClassName = "",
  className = "",
  contentClassName = "",
  tagProps,
  headingProps,
  subheadingProps,
  featureListProps,
  buttonContainerClassName,
  primaryBtnProps,
  secondaryBtnProps,
  imageProps,
}) {

  return (
    <section className={outerClassName}>
      <div className={className}>
        <div className={contentClassName}>
          {tagProps && <TagButton {...tagProps} />}

          {headingProps && <Heading {...headingProps} />}

          {subheadingProps && <SubHeading {...subheadingProps} />}

          { featureListProps && <ServiceFeature  {...featureListProps} />}
          
          {(primaryBtnProps || secondaryBtnProps) &&
            <div className={buttonContainerClassName}>
              {primaryBtnProps && <Button {...primaryBtnProps} />}
              {secondaryBtnProps && <Button {...secondaryBtnProps} />}
            </div>
          }
        </div>

        {imageProps && <BannerImage {...imageProps} /> }
      </div>
    </section>
  );
}

export default Services;