import { ButtonFilters, Container, Section } from "./NoticesFilters.style";
import { useAuth } from "../../../hooks/useAuth";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AddPetButton } from "../AddPetButton/AddPetButton";
import { Loader } from "../../Loader/Loader";

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
        <AddPetButton />
      </Section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
