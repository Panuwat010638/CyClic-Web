'use client'
import React, { useState } from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const CRMLoyaltyAccordion = () => {
  const [expandedKeys, setExpandedKeys] = useState(new Set(["crm"]));

  const items = [
    {
      key: "crm",
      title: "CRM & Loyalty Programs",
      content: "บริการให้คำปรึกษาธุรกิจเชิงลึก วางแผน เชิงกลยุทธ์ โดยปรับให้เหมาะสมกับความต้องการของแต่ละธุรกิจ"
    },
    { key: "consumer", title: "Consumer & Market Research" },
    { key: "omnichannel", title: "Omnichannel Strategy" },
    { key: "content", title: "Content Strategy" },
  ];

  return (
    <Accordion 
      className="max-w-xs"
      selectedKeys={expandedKeys}
      onSelectionChange={setExpandedKeys}
    >
      {items.map((item) => (
        <AccordionItem
        hideIndicator={true}
          key={item.key}
          aria-label={item.title}
          title={
            <div className="flex items-center gap-2">
              {expandedKeys.has(item.key) ? (
                <ChevronDown className="text-default-500 flex-shrink-0" />
              ) : (
                <ChevronRight className="text-default-500 flex-shrink-0" />
              )}
              <span>{item.title}</span>
            </div>
          }
          className="py-0"
          classNames={{
            title: "font-semibold",
            content: "text-sm text-default-500",
          }}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CRMLoyaltyAccordion;