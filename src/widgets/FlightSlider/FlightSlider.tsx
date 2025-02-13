import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import "./FlightSlider.css"
import { calculateDuration } from "@/shared/utils"

const FlightSlider = ({
  from,
  to,
  fromTime,
  toTime
}: {
  from: string
  to: string
  fromTime: string
  toTime: string
}) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value >= 100) {
      setValue(0)
    }

    const interval = setInterval(() => {
      setValue(value + 1)
    }, 30)
    return () => clearInterval(interval)
  }, [value])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  const formatTime = (time: string) => {
    const date = new Date(time)
    return Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit"
    }).format(date)
  }

  return (
    <Box my={8} width="100%">
      <Box className="flight-component">
        <Box>
          <Typography component="h5" variant="subtitle1">
            {from}
          </Typography>
          <Typography component="h6" variant="subtitle1">
            {formatTime(fromTime)}
          </Typography>
        </Box>

        <input
          type="range"
          className="flight"
          value={value}
          min="0"
          max="100"
          onInput={onChange}
          style={{ "--val": value } as React.CSSProperties}
          aria-label="percentage flown"
        />
        <Box>
          <Typography component="h5" variant="subtitle1">
            {to}
          </Typography>
          <Typography component="h6" variant="subtitle1">
            {formatTime(toTime)}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" fontWeight={700} textAlign="center">
        {calculateDuration(fromTime, toTime)}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ opacity: 0.3, m: "0 auto" }}
        fontWeight={700}
        textAlign="center"
      >
        You can move the airplane
      </Typography>
    </Box>
  )
}

export { FlightSlider }
