import PropTypes from "prop-types";
import { InfoContainer, Item, ItemContainer } from "./FriendsItem.styled";
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
      <div>
        <a href={url} target="_blank">
          <h2>{title}</h2>
        </a>
      </div>

      <ItemContainer>
        <img src={imageUrl ? imageUrl : defaultImage} alt={imageUrl} />
        <InfoContainer>
          <span>
            Time :
            <DaysList workDays={workDays} />
          </span>
          <span>
            {/* {workDays.map(({ isOpen, from, to }) => {
            isOpen === false ? (
              <span>
                Time :<p>day and night</p>
              </span>
            ) : (
              <span>
                Time :
                <ul>
                  <li>
                    <p>
                      {from}-{to}
                    </p>
                  </li>
                </ul>
              </span>
            );
          })} */}
            Address:
            {address === "" ? (
              <p>website only</p>
            ) : (
              <p>
                <a href={addressUrl}>{address}</a>
              </p>
            )}
          </span>
          <span>
            Email:
            <p>
              {email === "" ? (
                <p>phone or website only</p>
              ) : (
                <a href={`mailto:${email}`}>{email}</a>
              )}
            </p>
          </span>
          <span>
            Phone:
            <p>
              {phone === "" ? (
                <p>email or website only</p>
              ) : (
                <a href={`tel:${phone}`}>{phone}</a>
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
