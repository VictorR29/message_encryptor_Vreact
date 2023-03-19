import { toast } from "react-hot-toast";
import { colors } from "../GlobalStyles/Variables";

const useCopyNotification = () => {
  toast.success('copied message', {
    duration: 2000,
    position: 'top-center',
    style: {
      color: colors.Text_primary,
      borderRadius: "50px",
      background: colors.Neon_2,
      boxShadow: `0px 0px 20px ${colors.Neon_2}`,
    }
  });
};

export { useCopyNotification };