import React from "react";
import { dashboardServerSideHelper } from "@helpers/dashboard-serverside.helper";
import DashboardLayout from "@components/Dashboard/DashboardLayout/DashboardLayout";
import CreateGroupForm from "@components/CreateGroupForm/CreateGroupForm";

const CreateGroup = () => {
  return (
    <DashboardLayout>
      <CreateGroupForm />
    </DashboardLayout>
  );
};

export default CreateGroup;

export async function getServerSideProps(ctx) {
  const serverSideReturn = dashboardServerSideHelper(ctx);
  return serverSideReturn;
}
