import {
  Stack,
  Typography,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  useTheme,
  FormControl,
  Box,
} from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";
import { Fragment, useState } from "react";
import NewsLetterModal from "../../newsletter/index";
import useBooleanState from "webrix/hooks/useBooleanState";

type Form = {
  email: string;
};

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export default function NewsLetter() {
  const [email, setEmail] = useState<null | string>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const onSubmit = ({ email }: Form) => {
    setEmail(email);
    openModal();
  };

  const { palette } = useTheme();

  const { t } = useTranslation("common");

  const {
    value: isOpen,
    setTrue: openModal,
    setFalse: closeModal,
  } = useBooleanState(!!email);

  return (
    <Fragment>
      <Stack spacing={2}>
        <Typography>{t("newsletter_description")}</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            fullWidth
            color={"neutral"}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: `${palette.neutral.main}`,
              },
            }}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <>
                  <InputLabel
                    htmlFor="news_letter_email"
                    sx={{ color: palette.common.white }}
                  >
                    Email
                  </InputLabel>
                  <OutlinedInput
                    error={Boolean(errors.email)}
                    id="news_letter_email"
                    sx={{ color: palette.common.white }}
                    {...field}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" type="submit" color="secondary">
                          <MarkEmailReadIcon color="secondary" />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="email"
                  />
                </>
              )}
            />
          </FormControl>
        </Box>
      </Stack>

      <NewsLetterModal
        email={email!}
        setEmail={setEmail}
        modalState={{ isOpen, openModal, closeModal }}
      />
    </Fragment>
  );
}
