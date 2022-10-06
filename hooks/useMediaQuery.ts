import { default as muiHook } from '@mui/material/useMediaQuery';
import { Breakpoint, useTheme } from '@mui/material/styles';
import json2mq from 'json2mq';

export type Key = 'up' | 'down';

export type Args = Parameters<typeof json2mq>;

export default function useMediaQuery() {
  const theme = useTheme();

  const matches = (key: Key = 'up', breakpoint: Breakpoint) =>
    muiHook(theme.breakpoints[key](breakpoint));

  const exactlyMatches = (args: Args) => muiHook(json2mq(...args));

  const isSm = matches("down", "md");

  return {
    matches,
    isSm,
    exactlyMatches,
  };
}
