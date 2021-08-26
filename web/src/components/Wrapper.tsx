import { Box, Wrap } from "@chakra-ui/react";

interface WrapperProps {
  variant?: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      width="100%"
      marginTop={8}
      marginX="auto"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
