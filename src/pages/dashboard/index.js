import React from "react";
import { useGetAllGroups } from "@hooks/reusables/useGetAllGroups.hook";
import { dashboardServerSideHelper } from "@helpers/dashboard-serverside.helper";
import DashboardLayout from "@components/Dashboard/DashboardLayout/DashboardLayout";
import CreateUserForm from "@components/CreateUserForm/CreateUserForm";

const Index = () => {
  useGetAllGroups();

  return (
    <DashboardLayout>
      <CreateUserForm />
    </DashboardLayout>
  );
};

export default Index;

export async function getServerSideProps(ctx) {
  const serverSideReturn = dashboardServerSideHelper(ctx);
  return serverSideReturn;
}
