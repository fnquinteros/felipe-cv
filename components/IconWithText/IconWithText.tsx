import {
  Box,
  BoxProps,
  Link,
  LinkProps,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  href?: string;
}

export default function IconWithText({ Icon, text, href }: Props) {
  const Container = ({ children, sx }: LinkProps | BoxProps) =>
    href ? (
      <Link
        target="_blank"
        sx={sx}
        color="text.secondary"
        href={href}
        display="flex"
      >
        {children}
      </Link>
    ) : (
      <Box sx={sx} color="text.secondary" display="flex">
        {children}
      </Box>
    );
  return (
    <Container
      sx={{ marginBlock: "auto", marginLeft: 0.5 }}
      color="text.secondary"
      display="flex"
      {...(!!href && { href })}
    >
      <Icon
        sx={{
          color: "text.secondary",
          marginRight: 1,
          marginTop: 0.25,
        }}
      />
      <Typography fontSize={18}>{text}</Typography>
    </Container>
  );
}
