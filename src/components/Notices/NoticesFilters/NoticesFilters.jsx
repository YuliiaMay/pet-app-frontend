import {
  BtnIcon,
  ButtonAdd,
  ButtonFilters,
  Container,
  Section,
} from "./NoticesFilters.style";
import { useAuth } from "../../../hooks/useAuth";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as PlusSmall } from "../../../images/Icon/PlusSmall.svg";

export const NoticesFilters = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
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
          <span>Add Pet</span>
          <BtnIcon>
            <PlusSmall />
          </BtnIcon>
        </ButtonAdd>
      </Section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};