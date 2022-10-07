import { Alert, Button, Grid, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { FunctionComponent, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import Modal from "../modal";
import WithModal, { InjectedModalState } from "../modal/widthModal";

type Props = {
  email: string;
  setEmail: (arg: any) => void;
  modalState: InjectedModalState;
};

type Data = {
  email: string;
  firstName: string;
  lastName: string;
};

const NewsLetterModal: FunctionComponent<Props> = ({
  email,
  setEmail,
  modalState,
}) => {
  const { t } = useTranslation("common");

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<Data>({
    defaultValues: useMemo(
      () => ({
        email,
      }),
      [email]
    ),
  });

  useEffect(() => {
    reset({ email });
  }, [email, reset]);

  const onSubmit = async ({ email, ...member }: Data) => {
    try {
      await axios.post("/api/newsletter", {
        email,
        member,
      });
    } catch (e: unknown) {}
  };

  return (
    <Modal title={t("continue_registration")} {...modalState}>
      {isSubmitSuccessful && (
        <Alert sx={{ mb: 3 }}>{t("registration_thanking")}</Alert>
      )}
      <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid spacing={4} container>
          <Grid xs={12} md={12} item>
            <TextField
              {...register("email", { required: true })}
              label={t("contact_form.email")}
              disabled={isSubmitSuccessful}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("firstName", { required: true })}
              label={t("contact_form.firstName")}
              disabled={isSubmitSuccessful}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("lastName", { required: true })}
              label={t("contact_form.lastName")}
              disabled={isSubmitSuccessful}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            {!isSubmitSuccessful && (
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                {t("contact_form.submit")}
              </Button>
            )}
          </Grid>
        </Grid>
      </Stack>
    </Modal>
  );
};

export default NewsLetterModal;
