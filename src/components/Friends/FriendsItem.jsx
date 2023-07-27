import PropTypes from "prop-types";
import { InfoContainer, Item, ItemContainer } from "./FriendsItem.styled";

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
      <a href={url}>
        <h2>{title}</h2>
      </a>

      <ItemContainer>
        <img src={imageUrl} alt={imageUrl} />
        <InfoContainer>
          <span>
            Time : <p>12-00</p>
          </span>
          <span>
            Address:
            <p>
              <a href={addressUrl}>{address}</a>
            </p>
          </span>
          <span>
            Email:
            <p>
              {!email ? "phone only" : <a href={`mailto:${email}`}>{email}</a>}
            </p>
          </span>
          <span>
            Phone:
            <p>
              {!phone ? "email only" : <a href={`tel:${phone}`}>{phone}</a>}
            </p>
          </span>
        </InfoContainer>
      </ItemContainer>
    </Item>
  );
};

FriendsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  workDays: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  addressUrl: PropTypes.string.isRequired,
};
