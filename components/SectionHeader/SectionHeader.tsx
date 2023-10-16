import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
}

export default function SectionHeader({ text }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: 5,
        borderBottomColor: "primary.main",
        borderBottomStyle: "solid",
        marginBottom: 6,
      }}
    >
      <Typography
        fontFamily="Montserrat"
        fontWeight={600}
        fontSize={32}
        color="primary.main"
      >
        {text}
      </Typography>
    </Box>
  );
}
