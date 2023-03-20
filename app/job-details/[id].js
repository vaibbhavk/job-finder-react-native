import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { ScreenHeaderBtn } from "../../components";
import { COLORS } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, reFetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView>{/* 1:31 */}</ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
