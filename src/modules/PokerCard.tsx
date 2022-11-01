import { Card, CardContent, SxProps } from "@mui/material"
import { Theme } from "@mui/system";
import { MouseEventHandler, useCallback, useState } from "react";

type PokerCardProps = {
  number: number;
  sx: SxProps<Theme>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isClosed?: boolean;
};

export const PokerCard = ({ number, sx: _sx, onClick, isClosed }: PokerCardProps) => {

  const [elevation, setElevation] = useState(1);
  const onMouseOver = useCallback(() => setElevation(6), []);
  const onMouseOut = useCallback(() => setElevation(1), []);

  return (
    <Card sx={Object.assign({}, sx(isClosed), _sx)} elevation={elevation} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
      <CardContent>
        {isClosed ? '' : number}
      </CardContent>
    </Card>
  )
}

const sx = (isClosed?: boolean) => {
  return {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 74,
    fontSize: 24,
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: isClosed ? '#ddd' : '#fff',
  } as SxProps<Theme>;
};
