import { Grid, GridProps } from "@mui/material";

export default function ProfileInfoContainer({ children }: GridProps) {
  return (
    <Grid
      item
      md={3}
      height="100%"
      bgcolor="primary.main"
      display="flex"
      justifyContent="space-around"
    >
      {children}
    </Grid>
  );
}
