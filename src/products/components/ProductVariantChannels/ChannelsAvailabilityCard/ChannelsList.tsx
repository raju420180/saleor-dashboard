import { CardContent, Typography } from "@material-ui/core";
import { Accordion, AccordionSummary } from "@saleor/macaw-ui";
import React from "react";

import {
  useAccordionStyles,
  useExpanderStyles,
  useSummaryStyles,
} from "./styles";

interface ChannelListProps {
  summary: string;
}

export const ChannelsList: React.FC<ChannelListProps> = ({
  summary,
  children,
}) => {
  const classes = useAccordionStyles();
  const expanderClasses = useExpanderStyles({});
  const summaryClasses = useSummaryStyles({});

  return (
    <Accordion classes={expanderClasses}>
      <CardContent className={classes.summaryContent}>
        <AccordionSummary
          className={summaryClasses.root}
          data-test-id="channels-variant-availability-summary"
        >
          <Typography variant="caption">{summary}</Typography>
        </AccordionSummary>
      </CardContent>
      {children}
    </Accordion>
  );
};
