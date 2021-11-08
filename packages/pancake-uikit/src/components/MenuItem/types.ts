import { Colors } from "../../theme";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
  isActive?: boolean;
  isMain?: boolean;
  href: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
  $isMain?: boolean;
};
