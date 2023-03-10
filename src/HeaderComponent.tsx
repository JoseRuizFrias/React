import React from "react";

export const Headercomponent: React.FC = () => {
    return (
        <div className="list-header">
            <span className="list-header-avatar">Avatar</span>
            <span className="list-header-id">Id</span>
            <span className="list-header-name">Name</span>
          </div>
    );
}