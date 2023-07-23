import {
  BtnIcon,
  ButtonAdd,
  ButtonFilters,
  Container,
  Section,
} from "./NoticesFilters.style";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "../../../hooks/useAuth";
import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
export const NoticesFilters = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ResponsiveContainer>
      <Section>
        <Container>
          <ButtonFilters to="/notices/sell">sell</ButtonFilters>
          <ButtonFilters to="/notices/lost-found">lost/found</ButtonFilters>
          <ButtonFilters to="/notices/for-free">in good hands</ButtonFilters>

          {isLoggedIn && (
            <>
              <ButtonFilters to="/notices/favorite">favorite ads</ButtonFilters>
              <ButtonFilters to="/notices/own">my ads</ButtonFilters>
            </>
          )}
        </Container>
        <ButtonAdd to="/add-pet">
          Add Pet
          <BtnIcon>
            <FiPlus />
          </BtnIcon>
        </ButtonAdd>
      </Section>
    </ResponsiveContainer>
  );
};
