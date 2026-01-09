import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>Gönderen: {fullName}</h1>

    <div style={{ color: "red", marginBottom: "8px" }}>
      {email} adresinden yeni bir mesaj aldın
    </div>

    <blockquote
      style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "12px",
        fontStyle: "italic",
      }}
    >
      {message}
    </blockquote>
  </div>
);
