import PropTypes from "prop-types";
import {
  InfoContainer,
  Item,
  ItemContainer,
  Link,
  TitleBox,
} from "./FriendsItem.styled";
import defaultImage from "../../../images/friends/defaultImage.png";
import { DaysList } from "../DaysList/DaysList";

export const FriendsItem = ({
  title,
  url,
  imageUrl,
  address,
  workDays,
  phone,
  email,
  addressUrl,
}) => {
  return (
    <Item>
      <TitleBox>
        <a href={url} target="_blank">
          {title}
        </a>
      </TitleBox>

      <ItemContainer>
        <img src={imageUrl ? imageUrl : defaultImage} alt={imageUrl} />
        <InfoContainer>
          <span>
            <DaysList workDays={workDays} />
          </span>
          <span>
            Address:
            {address === "" ? (
              <p>website only</p>
            ) : (
              <p>
                <Link href={addressUrl} target="_blank">
                  {address}
                </Link>
              </p>
            )}
          </span>
          <span>
            Email:
            <p>
              {email === "" ? (
                <p>phone or website only</p>
              ) : (
                <Link href={`mailto:${email}`}>{email}</Link>
              )}
            </p>
          </span>
          <span>
            Phone:
            <p>
              {phone === "" ? (
                <p>email or website only</p>
              ) : (
                <Link href={`tel:${phone}`}>{phone}</Link>
              )}
            </p>
          </span>
        </InfoContainer>
      </ItemContainer>
    </Item>
  );
};

FriendsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  workDays: PropTypes.array.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  addressUrl: PropTypes.string,
};
