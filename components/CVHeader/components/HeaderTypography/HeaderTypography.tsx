import { Typography, TypographyProps } from "@mui/material";

export default function HeaderTypography({
  children,
  ...props
}: TypographyProps) {
  return (
    <Typography
      bgcolor="primary.main"
      fontFamily="Montserrat"
      color="text.secondary"
      sx={{
        height: "100%",
        padding: 2,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
