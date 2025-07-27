"use client";

import * as React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import * as motion from "motion/react-client";

function DatePicker() {
  const [startDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  // Handle start date change
  const handleStartDateChange = (date: Date | undefined) => {
    if (date) {
      setStartDate(date);
      setStartDateOpen(false);
    }
  };

  // Handle end date change
  const handleEndDateChange = (date: Date | undefined) => {
    if (date) {
      setEndDate(date);
      setEndDateOpen(false);
    }
  };

  // Calculate the number of days between the start and end dates
  const calculateDaysDifference = () => {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  const leapyear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const daysDifference = calculateDaysDifference();

  // Calculate days left in the current year
  const calculateDaysLeftInYear = () => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31); // December 31st
    const timeDifference = endOfYear.getTime() - now.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  const daysLeftInYear = calculateDaysLeftInYear();

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-center">Day Counter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={handleStartDateChange}
                      captionLayout="dropdown"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={handleEndDateChange}
                      captionLayout="dropdown"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <MorphingPopover>
            <MorphingPopoverTrigger asChild>
              <Button className="w-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                <motion.span
                  layoutId="day-counter-result-label"
                  layout="position"
                  className="inline-flex items-center gap-2"
                >
                  <motion.div
                    layoutId="calculate-icon"
                    layout="position"
                    className="w-5 h-5 rounded-full bg-white/20"
                  />
                  Calculate Day Number
                </motion.span>
              </Button>
            </MorphingPopoverTrigger>
            <MorphingPopoverContent className="w-96 p-8 shadow-lg border bg-card text-card-foreground">
              <div className="grid gap-6">
                <div className="space-y-4">
                  <motion.div
                    layoutId="day-counter-result-label"
                    layout="position"
                    className="text-center"
                  >
                    <motion.h2
                      layoutId="calculate-icon"
                      layout="position"
                      className="text-4xl font-bold text-foreground mb-2"
                    >
                      {daysDifference} days
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground text-lg font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      between selected dates
                    </motion.p>
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-4 pt-6 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-6 text-base">
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                        From:
                      </span>
                      <p className="font-semibold text-lg">
                        {startDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                        To:
                      </span>
                      <p className="font-semibold text-lg">
                        {endDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {daysDifference > 0 && (
                    <motion.div
                      className="text-center p-4 bg-muted rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm text-muted-foreground font-medium">
                        That's approximately{" "}
                        <span className="font-bold text-foreground">
                          {Math.floor(daysDifference / 7)} weeks
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-foreground">
                          {daysDifference % 7} days
                        </span>
                      </p>
                    </motion.div>
                  )}

                  {daysDifference < 0 && (
                    <motion.div
                      className="text-center p-4 bg-muted rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm text-muted-foreground font-medium">
                        The end date is before the start date
                      </p>
                    </motion.div>
                  )}

                  <motion.div
                    className="text-center p-4 bg-muted/50 rounded-lg border border-border/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">
                      <span className="font-bold text-foreground">
                        {daysLeftInYear} days
                      </span>{" "}
                      left in {new Date().getFullYear()}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </MorphingPopoverContent>
          </MorphingPopover>
        </CardContent>
      </Card>
    </div>
  );
}

export default DatePicker;
