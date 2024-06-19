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
    //Featured blog cards
    {
      //Facebook
      logoPath: require('../assets/Facebook2.png'),
      jobTitle: 'Software Engineer',
      companyName: 'Facebook',
      salary: '$180,000',
      location: 'Accra, Ghana',
      backgroundColor: '#356899',
    },
    {
      //Git Hub
      logoPath: require('../assets/githublogo.jpeg'),
      jobTitle: 'Software Architect',
      companyName: 'Github',
      salary: '$480,000',
      location: 'Accra, Sunyani',
      backgroundColor: '#000',
    },
    {
      //Pinterest
      logoPath: require('../assets/pinterestlogo.jpeg'),
      jobTitle: 'Designer',
      companyName: 'Pinterest',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#f01e2c',
    },
    {
      //Uber
      logoPath: require('../assets/uberlogo.jpeg'),
      jobTitle: 'Driver',
      companyName: 'Uber',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#131313',
    },
    {
    //Bolt
      logoPath: require('../assets/boltlogo.jpeg'),
      jobTitle: 'Driver',
      companyName: 'Bolt',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#4cbb17',
    },
    {
    //Amazon
      logoPath: require('../assets/amazonlogo.jpeg'),
      jobTitle: 'Sales Person',
      companyName: 'Amazon',
      salary: '$80,000',
      location: 'Tamale, Ghana',
      backgroundColor: '#e6cc00',
    },
    {
      //Ali express
        logoPath: require('../assets/aliexpresslogo.jpeg'),
        jobTitle: 'Sales Person',
        companyName: 'Ali Express',
        salary: '$80,000',
        location: 'Tamale, Ghana',
        backgroundColor: '#A8092d',
    },
    {
      //Twitter
        logoPath: require('../assets/twitterlogo.jpeg'),
        jobTitle: 'Fronend Developer',
        companyName: 'Twitter',
        salary: '$980,000',
        location: 'Tamale, Ghana',
        backgroundColor: '#04356a',
    },

  ];

  const popularJobs = [
    //Popular job cards
    {
      logoPath: require('../assets/burgerkinglogo.png'),
      jobTitle: 'Jr Executive',
      companyName: 'Burger King',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/beatslogo.png'),
      jobTitle: 'Product Manager',
      companyName: 'Beats',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/Facebook2.png'),
      jobTitle: 'Product Manager ',
      companyName: 'Facebook',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/githublogo.jpeg'),
      jobTitle: 'Frontend Developer',
      companyName: 'Github',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/twitterlogo.jpeg'),
      jobTitle: 'Backend Developer',
      companyName: 'Twitter',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/googlelogo.jpeg'),
      jobTitle: 'Database Manager',
      companyName: 'Google',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/amazonlogo.jpeg'),
      jobTitle: 'CEO',
      companyName: 'Amazon',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },
    {
      logoPath: require('../assets/pinterestlogo.jpeg'),
      jobTitle: 'Content Creator',
      companyName: 'Pinterest',
      salary: '$96,000/y',
      location: 'Los Angeles, US',
    },

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
    marginTop: 15,
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
