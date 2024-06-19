import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import JobCard from '../components/JobCard';
import FeaturedJobCard from '../components/FeaturedJobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    {
      logoPath: require('../assets/Facebook2.png'),
      jobTitle: 'Software Engineer',
      companyName: 'Facebook',
      salary: '$180,000',
      location: 'Accra, Ghana',
      backgroundColor: '#356899',
    },
    // Add 7 more featured job objects here
  ];

  const popularJobs = [
    {
      logoPath: require('../assets/burgerkinglogo.png'),
      jobTitle: 'Jr Executive',
      companyName: 'Burger King',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    // Add 7 more popular job objects here
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <Image
            source={require('../assets/profileImage.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
          />
        </View>
        <Text style={styles.fjsectionTitle}>Featured Jobs</Text>
        <ScrollView horizontal={true} style={styles.featuredJobsContainer}>
          {featuredJobs.map((job, index) => (
            <FeaturedJobCard key={index} {...job} />
          ))}
        </ScrollView>
        <Text style={styles.pjsectionTitle}>Popular Jobs</Text>
        {popularJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8FA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  fjsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredJobsContainer: {
    padding: 10,
  },
  pjsectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
});

export default HomeScreen;
