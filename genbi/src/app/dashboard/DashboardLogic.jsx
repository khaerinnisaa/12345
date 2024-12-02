import { useDrawer } from "@/contexts/DrawerContext";
import { fetchData } from "@/service/api";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function DashboardLogic() {
  const { setLoadingRoute } = useDrawer();
  const [total, setTotal] = useState();
  const [male, setMale] = useState();
  const [female, setFemale] = useState();
  const [kabinetId, setKabinetId] = useState();
  const [loadingGet, setLoadingGet] = useState(true);

  const token = Cookies.get("token");
  useEffect(() => {
    // getData();
    dataKabinet();
    dataPengurus();
  }, []);

  const getData = async () => {
    try {
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchData(`/admin/dashboard`, token).then((res) => {
        setTotal(res.data.total_members);
        setMale(res.data.male_members);
        setFemale(res.data.female_members);
        setLoadingRoute(false);
        setLoadingGet(false);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingGet(false);
    }
  };

  const dataKabinet = async () => {
    fetchData(`/admin/cabinets`, token).then((res) => {
      if (res.data.length > 0) {
        setKabinetId(res.data[0].id);
        setTotal(res.data[0].total_members);
        setMale(res.data[0].male_members);
        setFemale(res.data[0].female_members);
      } else {
        setKabinetId("");
        setTotal(0);
        setMale(0);
        setFemale(0);
      }
    });
  };

  // data pengurus
  const dataPengurus = async () => {
    try {
      fetchData(`/admin/members/cabinets/${kabinetId}`, token).then((res) => {
        setLoadingRoute(false);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingGet(false);
    }
  };

  return {
    value: {
      total,
      male,
      female,
      loadingGet,
    },
  };
}
