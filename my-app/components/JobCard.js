import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ logoPath, jobTitle, companyName, salary, location }) => {
  return (
    <View style={styles.popularJobCard}>
      <Image source={logoPath} style={styles.companyLogo} />
      <View style={styles.pjCardRight}>
        <View style={styles.jobTitle}>
          <Text style={styles.jobTitleText}>{jobTitle}</Text>
          <Text style={styles.companyNameText}>{companyName}</Text>
        </View>
        <View style={styles.jobPay}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popularJobCard: {
    flexDirection: 'row',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  pjCardRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    marginLeft: 10,
  },
  jobTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyNameText: {
    fontSize: 14,
    color: 'gray',
  },
  jobPay: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
});

export default JobCard;