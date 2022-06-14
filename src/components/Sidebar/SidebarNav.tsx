import { Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="QUALIDADE">
        <NavLink icon={RiDashboardLine} href="/naoconformidades">
          Não Conformidades
        </NavLink>
        <NavLink icon={RiInputMethodLine} href="/forms">
          Inspeções
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/auto">
          Relatórios
        </NavLink>
      </NavSection>
      <NavSection title="ENGENHARIA PROCESSOS">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiInputMethodLine} href="/forms">
          Maquinas
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/auto">
          Centros de trabalho
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/auto">
          Roteiros
        </NavLink>
      </NavSection>
    </Stack>
  );
}
