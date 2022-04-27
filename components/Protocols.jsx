import React from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import Pdata from "../data/pdata";
import { ProtocolsContainer, PGrid } from "../styles/Protocols";

const Protocols = () => {
  return (
    <ProtocolsContainer>
      <PGrid>
        {Pdata.map((proto) => {
          return (
            <div key={proto.id} className="protocol-card ">
              <div className="icon">
                <IoIosCheckmarkCircle
                  style={{ color: "#2B6CB0", fontSize: "3em" }}
                />
              </div>
              <br />
              <h1>{proto.title}</h1>
              <br />
              <p>{proto.dec}</p>
            </div>
          );
        })}
      </PGrid>
    </ProtocolsContainer>
  );
};

export default Protocols;
