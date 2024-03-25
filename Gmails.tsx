import { Box, Typography } from "@mui/material";

type Account = {
  name: string;
  email: string;
  url: string;
};

const MailButton = ({ account }: { account: Account }) => {
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="#000"
        p={0.5}
        sx={{ "&:hover": { textDecoration: "underline" } }}
      >
        <Typography color="inherit">{account.name}</Typography>
        <Typography variant="caption" color="#444">
          {`(${account.email})`}
        </Typography>
      </Box>
    </a>
  );
};

export const Gmails = () => {
  const accounts: Account[] = [
    {
      name: "メイン",
      email: "yudai1204h@gmail.com",
      url: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      name: "大学",
      email: "yudai1204u@gmail.com",
      url: "https://mail.google.com/mail/u/1/#inbox",
    },
    {
      name: "学番",
      email: "al21127@shibaura-it.ac.jp",
      url: "https://mail.google.com/mail/u/2/#inbox",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: 220,
      }}
    >
      {accounts.map((account) => (
        <MailButton key={account.email} account={account} />
      ))}
    </Box>
  );
};
