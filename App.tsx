// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   ScrollView,
//   Platform,
// } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   // const[hasError,setHasError] = useState(false)
//   return (
//     // <View>
//     //   <Text>Hello world</Text>
//     // </View>
//     // <View style={{ flex: 1 }}>
//     //   <View style={{ flex: 1, backgroundColor: 'red' }}>
//     //     <Text>Top Section</Text>
//     //   </View>
//     //   <View style={{ flex: 2, backgroundColor: 'blue' }}>
//     //   <Text>Bottom Section (Double Height)</Text>
//     //   </View>
//     // </View>
//     // <View style={{
//     //   backgroundColor:'red',
//     //   padding:15,
//     //   borderRadius:10,
//     //   shadowColor: "#000",
//     //   marginTop:50,
//     //   shadowOffset:{width:0,height:2}

//     // }}>
//     //   <Text>Card Content</Text>

//     // </View>

//     // <View style={{
//     //   flexDirection:'row'
//     // }}>
//     //   <View style={{width:50, height:50,backgroundColor:'red', marginTop:70,margin:10}}>

//     //   </View>
//     //   <View style={{width:50, height:50,backgroundColor:'green',marginTop:70,margin:10}}>

//     //   </View>

//     // </View>
//     // <View>
//     //   <Text style={{fontSize:18,
//     //   color:'#333',
//     //   textAlign:'center',
//     //   fontWeight:600,
//     //   fontFamily:"Arial",
//     //   lineHeight:24,
//     //   textTransform:'uppercase'

//     //   }}>
//     //     Normal Text {''}
//     //     <Text style={{fontWeight:'bold',color:'red'}}>
//     //       {''} Back To Normal

//     //     </Text>

//     //   </Text>
//     //   <Text numberOfLines={2} ellipsizeMode='tail'>
//     // Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam facilis obcaecati cum labore laboriosam id corporis nemo similique nisi a magnam veniam voluptas quaerat soluta vel pariatur, dicta fugiat dolore molestias illo, recusandae possimus praesentium optio? Omnis suscipit reprehenderit nesciunt tenetur perferendis ab sunt, ipsam maiores pariatur fugit quisquam?
//     //   </Text>
//     //   <TouchableOpacity onPress={()=>{}}>
//     //     <Text style={{color:'red',textDecorationLine:'underline'}}>Read Terms & Condition </Text>
//     //   </TouchableOpacity>

//     //   <Image source={{uri:"https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
//     //   style={{width:'100%',height:250}}
//     //   // resizeMode='contain'
//     //    resizeMode='cover'
//     //    onError={()=>setHasError(true)}
//     //   />

//     // </View>

//     // <View style={styles.container}>
//     //   {/* Fixed Header */}
//     //   <View style={styles.header}>
//     //     <Text style={styles.headerTitle}>Profile</Text>
//     //   </View>

//     //   <ScrollView>
//     //     {/* Profile Info */}
//     //     <View style={styles.profileSection}>
//     //       <Image
//     //         source={{
//     //           uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/08/07/15/marvel.jpg',
//     //         }}
//     //         style={styles.profileImage}
//     //       />
//     //       <Text style={styles.name}>Rohit</Text>
//     //       <Text style={styles.bio}>Mobile Developer || React Native</Text>
//     //     </View>

//     //     {/* Stats */}
//     //     <View style={styles.statsContainer}>
//     //       <View style={styles.stat}>
//     //         <Text style={styles.statNumber}>6</Text>
//     //         <Text style={styles.statLabel}>Posts</Text>
//     //       </View>

//     //       <View style={styles.stat}>
//     //         <Text style={styles.statNumber}>1234</Text>
//     //         <Text style={styles.statLabel}>Followers</Text>
//     //       </View>

//     //       <View style={styles.stat}>
//     //         <Text style={styles.statNumber}>1234</Text>
//     //         <Text style={styles.statLabel}>Following</Text>
//     //       </View>
//     //     </View>

//     //     {/* ✅ Post Grid (ALAG container) */}
//     //     <View style={styles.postsGrid}>
//     //       {[1, 2, 3, 4, 5,6, 7, 8, 9, 10].map(item => (
//     //         <View key={item} style={styles.postItem}>
//     //           <Image
//     //             source={{
//     //               uri: 'https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Weather_in_Tawang_in_April_e9e74552b4.webp',
//     //             }}
//     //             style={styles.postImage}
//     //           />
//     //         </View>
//     //       ))}
//     //     </View>
//     //   </ScrollView>

//     //   {/* Bottom Tab */}
//     //   <View style={styles.bottomTab}>
//     //     <Text>Home</Text>
//     //     <Text>Search</Text>
//     //     <Text>Add</Text>
//     //     <Text>Profile</Text>
//     //   </View>
//     // </View>

//     // Part 2 Start CSS
//     //     <View >

//     //     <Text>Hello World</Text>
//     //     {/* Add Color kiya add fontSize */}
//     //     <Text style={{color:'red',fontSize:25}}>Hi Folks Kese h aap </Text>
//     //     {/* Multiple Properties */}
//     // <Text style={{
//     // color:'#335E45',
//     // fontSize:24,
//     // fontWeight:'bold',
//     // textAlign:"center",
//     // backgroundColor:'yellow',
//     // padding:10,
//     // marginTop:10

//     // }}>
//     //   Hello Another Start</Text>

//     // <View style={styles.container}>
//     //   <Text style={styles.heading} >Welcome To MY Place</Text>
//     //   <Text style={styles.subHeading}>To React Native</Text>

//     // </View>

//     //     </View>

//     //  <View style={{flex:1, padding:20, backgroundColor:"green"}}>
//     //   <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Title</Text>
//     // </View>

//     //     // Part 2 end CSS
//     // <View style={{marginTop:29, justifyContent:"center", alignItems:"center"}}>
//     //   <Text style={{fontSize:25, fontWeight:"bold", color:"tomato"}}>Hello Rohit</Text>
//     // </View>

//     // Size & Spacing Demo Start

//     // <View style={styles.demoBox}>
//     //   <Text style={styles.title}>Padding Vs Margin</Text>

//     // </View>
//     // Size & Spacing Demo End

//     // <View style={{flexDirection:"row"}}>
//     //   <Text>Home</Text>
//     //   <Text>About</Text>
//     //      <Text>Contact</Text>
//     // </View>

//     // <View style={{flexDirection:"column"}}>
//     //   <Text>Home</Text>
//     //   <Text>About</Text>
//     //      <Text>Contact</Text>
//     // </View>

//     // <View style={{flexDirection:"column-reverse"}}>
//     //   <Text>Home</Text>
//     //   <Text>About</Text>
//     //      <Text>Contact</Text>
//     // </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   // container: { flex: 1, backgroundColor: 'white' },
//   // header: {
//   //   height: 60,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   borderBottomWidth: 1,
//   //   borderBottomColor: '#eee',
//   // },
//   // headerTitle: { fontSize: 18, fontWeight: 'bold' },
//   // scrollView: { flex: 1 },
//   // profileSection: { alignItems: 'center', padding: 20 },
//   // profileImage: { width: 100, height: 100, borderRadius: 50 },
//   // name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
//   // bio: { fontSize: 14, color: '#666', marginTop: 5 },
//   // statsContainer: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-around',
//   //   paddingVertical: 20,
//   //   borderTopWidth: 1,
//   //   borderBottomWidth: 1,
//   //   borderColor: '#eee',
//   // },
//   // stat: { alignItems: 'center' },
//   // statNumber: { fontSize: 18, fontWeight: 'bold' },
//   // statLabel: { fontSize: 12, color: '#666', marginTop: 5 },
//   // postsGrid: {
//   //   flexDirection: 'row',
//   //   flexWrap: 'wrap',
//   //   padding: 5,
//   // },
//   // postItem: { width: '33.33%', padding: 5 },
//   // postImage: { width: '100%', aspectRatio: 1 },
//   // bottomTab: {
//   //   height: 60,
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-around',
//   //   alignItems: 'center',
//   //   borderTopWidth: 1,
//   //   borderTopColor: '#eee',
//   // },
//   // Part 2 Start CSS
//   // mainContainer: {
//   // flex: 1,
//   // },
//   // container:{
//   //   // flex:1,
//   //   backgroundColor:'black',
//   //   padding:20,
//   //   marginTop:15
//   // },
//   // heading:{
//   //   fontSize:28,
//   //   fontWeight:"bold",
//   //   color:"red",
//   //   textAlign:"center"
//   // },
//   // subHeading:{
//   //   fontSize:20,
//   //   color:"green",
//   //   fontStyle:"italic",
//   //   textAlign:"center"
//   // }
//   // Part 2 End CSS
//   // screen:{
//   //   flex:1,
//   //   padding:20,
//   //   backgroundColor:"black"
//   // },
//   // title:{
//   //   color:"white",
//   //   textAlign:"center",
//   //   fontWeight:"bold",
//   //   fontSize:20
//   // }
//   /* width:100 100 directy density independt pexels
//   height: '50%'
//   Special Dimension PRoperties deni ho apko
//   paddingHorizontal:10
//   marginHorizontal: 10
//   paddingVertical:10
//   marginVertical:10

//   */
//   // Size & Spacing Demo Start
//   //  demoBox:{
//   // size
//   // width:200,
//   // height:100,
//   // borderWidth:2,
//   // borderColor:"red",
//   // borderRadius:2,
//   // padding:20,
//   // margin:30,
//   // shadowColor:"black",
//   // textShadowOffset:{width:0, height:2},
//   // shadowOpacity:0.25,
//   // shadowRadius:3.85,
//   // elevation:5,
//   // backgroundColor:"greenyellow"
//   // backgroundColor:Platform.OS == 'ios' ? "#f8f8f8": "#fOfOfO"
//   //  },
//   //  title:{
//   // color:"green",
//   // color:"#3498db",
//   //  }
//   // Size & Spacing Demo End
// });

// // web div p img
// // React Native : View -> Native Engine -> Android  ios view

// // react native mein jo bi dekhjte ho wo real UI hai koi webview ya browser nhi isliye perfomance
// // view ek esa component hai jo kuch bhi nhi dikhata hai lekin sab arrange karta hai ye apke ka skeleton hai
// // Android pr : android.view.ViewGroup ban jata hai
// // ios: UIView Ban jata hai
// // Ye ek container hai jo children ko manage karta hai
// // jab bi aap design kro ek baat yad rkhna Har screen ka root view hamesha flex1 he rkhna isse pura screen utilize hoga
// // jese ki maan lo apko kbhi Touhabel  text banana ho like Terms Conditions type

// // jab apko folder se krni yah api se uske krne us case alg style se likhete
// // jese ki Image mein source ={require('./pathjahapna imagerkhi/image ka path)}
// // css use krte waqt kbhi bi ; iska use mt krna kyu ki javascript me style ek object hota hai Har property ek key valye ke pair mein smjhta hai
// /*.    font-Size => fontSize, background-color => bcakgroundColor, text-align =>textAlign
// border-radius => borderRadius, z-index => zIndex
//    CSS mein hypen yha pr hum sara kaam camel case mein krte h   */

// // Flex mein k ya hota h
// /*
//   .container:{
//   display:flex
//   }
//   React Native Default Column hota h
//   flex:1

//    */

// _____________************** Mod 6 Part - 2 *******__________________________
// App.js - Complete Responsive Design Showcase App
// Yeh ek demo application hai jo React Native mein responsive design kaise implement karte hain, yeh dikhata hai.
// Features:
// - Portrait aur Landscape mode mein layout change
// - Different screen sizes (phone, tablet) pe adjust
// - Live screen dimensions aur orientation display
// - Grid, Cards, Stats, Form, Bottom Nav – sab responsive

// import React, { useState, useEffect } from 'react';
// import {
//   View,               // Sabse basic container (jaise HTML ka div)
//   Text,               // Text dikhane ke liye component
//   StyleSheet,         // Styles ko object format mein likhne ka tarika (performance ke liye best)
//   Dimensions,         // Device ki current width/height lene ke liye + change listener
//   useWindowDimensions,// Sabse powerful hook responsive ke liye – width/height deta hai aur change pe auto re-render
//   ScrollView,         // Vertical scrolling content ke liye
//   TouchableOpacity,   // Clickable area jo press hone pe thoda transparent hota hai (button jaisa feel)
//   Platform,           // iOS aur Android ke beech code differentiate karne ke liye
//   StatusBar,          // Phone ke top status bar (battery, time wali bar) ko control karne ke liye
// } from 'react-native';

// const App = () => {
//   // useWindowDimensions hook se current screen ki width aur height milti hai
//   // Yeh hook screen rotate hone ya size change hone pe automatically component ko re-render kar deta hai
//   // Isliye responsive UI ke liye yeh sabse behtar tareeka hai
//   const { width, height } = useWindowDimensions();

//   // Orientation state banaya hai taaki hum grid/cards/form layout change kar sakein
//   // TypeScript style mein union type diya gaya hai safety ke liye
//   const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

//   // useEffect se hum screen size change ko listen kar rahe hain
//   // Modern React Native (0.65+) mein Dimensions.addEventListener ek subscription object return karta hai
//   useEffect(() => {
//     // Yeh function orientation decide karta hai
//     const updateOrientation = () => {
//       const dim = Dimensions.get('window');
//       setOrientation(dim.width > dim.height ? 'landscape' : 'portrait');
//     };

//     // Listener lagao aur subscription save kar lo
//     const subscription = Dimensions.addEventListener('change', updateOrientation);

//     // Component mount hone pe pehli baar orientation set kar do
//     updateOrientation();

//     // Cleanup function – important hai memory leak rokne ke liye
//     // Agar yeh nahi likhoge to app background mein listeners accumulate hote rahenge
//     return () => subscription.remove();
//   }, []); // Empty array → sirf ek baar mount hone pe setup aur unmount pe cleanup

//   // Responsive scaling function (optional helper)
//   // Base width 375px (iPhone SE jaisa common size) se proportion calculate karta hai
//   // Isse fonts, paddings, margins sab devices pe similar feel dete hain
//   const getResponsiveSize = (size: number) => {
//     const baseWidth = 375;
//     return (width / baseWidth) * size;
//   };
//   // Note: is demo mein is function ka use nahi kiya gaya hai, lekin future mein fontSize, margin etc. mein use kar sakte ho

//   return (
//     // Root View – poori screen cover karta hai
//     <View style={styles.container}>

//       {/* 1. Status Bar Customization */}
//       {/* light-content = white icons/text (dark background ke saath achha dikhta hai) */}
//       <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />

//       {/* 2. Header Section */}
//       {/* Platform specific paddingTop taaki iOS notch aur Android status bar overlap na kare */}
//       <View style={[styles.header, orientation === 'landscape' && styles.headerLandscape]}>
//         <Text style={styles.headerTitle}>✨ Responsive UI Showcase ✨</Text>

//         {/* Orientation aur screen size dikhane wale chips */}
//         <View style={styles.chipContainer}>
//           <View style={[
//             styles.chip,
//             { backgroundColor: orientation === 'portrait' ? '#FF6B6B' : '#4ECDC4' }
//           ]}>
//             <Text style={styles.chipText}>
//               {orientation === 'portrait' ? '📱 Portrait Mode' : '🖥️ Landscape Mode'}
//             </Text>
//           </View>

//           <View style={styles.chip}>
//             <Text style={styles.chipText}>
//               📏 {Math.round(width)} × {Math.round(height)}
//             </Text>
//           </View>
//         </View>
//       </View>
// <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
//       {/* 3. Main Scrollable Content */}
//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Section 1: Responsive Grid */}
//         <View style={styles.heroSection}>
//           <Text style={styles.sectionTitle}>🚀 Responsive Grid Example</Text>
//           <View style={[
//             styles.gridContainer,
//             orientation === 'landscape' && styles.gridContainerLandscape
//           ]}>
//             {[1, 2, 3, 3333].map((item) => (
//               <View
//                 key={item}
//                 style={[
//                   styles.gridItem,
//                   {
//                     // Portrait mein 2 columns, landscape mein 4 columns jaisa feel
//                     width: orientation === 'portrait' ? '48%' : '23%',
//                     backgroundColor: `hsl(${item * 90}, 70%, 60%)`,
//                   }
//                 ]}
//               >
//                 <Text style={styles.gridItemText}>{item}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         {/* Section 2: Horizontal Scrollable Pricing Cards */}
//         <View style={styles.cardSection}>
//           <Text style={styles.sectionTitle}>💳 Pricing Plans (Horizontal Scroll)</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled={width < 600}           // Chhote phones pe card snap karega
//             decelerationRate="fast"
//           >
//             <View style={[
//               styles.cardRow,
//               { width: width < 600 ? width * 3 : '100%' } // 3 cards almost visible on small screen
//             ]}>
//               {[
//                 { title: 'Premium', price: '$99', color: '#FF6B6B', icon: '👑' },
//                 { title: 'Pro',     price: '$49', color: '#4ECDC4', icon: '⭐' },
//                 { title: 'Basic',   price: '$19', color: '#45B7D1', icon: '💎' },
//               ].map((plan, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.card,
//                     {
//                       width: width < 600 ? width * 0.85 : width * 0.32,
//                       backgroundColor: plan.color,
//                       marginLeft: width < 600 ? (index === 0 ? 20 : 12) : 12,
//                     }
//                   ]}
//                   activeOpacity={0.8}
//                 >
//                   <Text style={styles.cardIcon}>{plan.icon}</Text>
//                   <Text style={styles.cardTitle}>{plan.title}</Text>
//                   <Text style={styles.cardPrice}>{plan.price}</Text>
//                   <Text style={styles.cardPeriod}>per month</Text>
//                   <View style={styles.cardButton}>
//                     <Text style={styles.cardButtonText}>Choose Plan</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//         </View>

//         {/* Section 3: Stats Cards Grid */}
//         <View style={styles.statsSection}>
//           <Text style={styles.sectionTitle}>📊 App Statistics</Text>
//           <View style={[
//             styles.statsContainer,
//             orientation === 'landscape' && styles.statsContainerLandscape
//           ]}>
//             {[
//               { label: 'Users',     value: '10K+', icon: '👥' },
//               { label: 'Downloads', value: '50K+', icon: '📥' },
//               { label: 'Rating',    value: '4.8',  icon: '⭐' },
//               { label: 'Countries', value: '150+', icon: '🌍' },
//             ].map((stat, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.statItem,
//                   {
//                     width: orientation === 'portrait' ? '45%' : '22%',
//                     backgroundColor: `rgba(108, 99, 255, ${0.1 + index * 0.05})`,
//                   }
//                 ]}
//               >
//                 <Text style={styles.statIcon}>{stat.icon}</Text>
//                 <Text style={styles.statValue}>{stat.value}</Text>
//                 <Text style={styles.statLabel}>{stat.label}</Text>
//               </View>
//             ))}
//           </View>
//         </View>

//         {/* Section 4: Responsive Contact Form */}
//         <View style={styles.formSection}>
//           <Text style={styles.sectionTitle}>📝 Contact Form (Responsive)</Text>
//           <View style={[
//             styles.formContainer,
//             orientation === 'landscape' && styles.formContainerLandscape
//           ]}>
//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Full Name</Text>
//               <View style={styles.inputField}>
//                 <Text style={styles.inputPlaceholder}>John Doe</Text>
//               </View>
//             </View>

//             <View style={styles.inputGroup}>
//               <Text style={styles.inputLabel}>Email Address</Text>
//               <View style={styles.inputField}>
//                 <Text style={styles.inputPlaceholder}>john@example.com</Text>
//               </View>
//             </View>

//             {/* Age + Country side by side in landscape */}
//             <View style={[styles.rowInputs, orientation === 'landscape' && { flexDirection: 'row' }]}>
//               <View style={[styles.inputGroup, { flex: 1, marginRight: orientation === 'landscape' ? 12 : 0 }]}>
//                 <Text style={styles.inputLabel}>Age</Text>
//                 <View style={styles.inputField}>
//                   <Text style={styles.inputPlaceholder}>25</Text>
//                 </View>
//               </View>

//               <View style={[styles.inputGroup, { flex: 2 }]}>
//                 <Text style={styles.inputLabel}>Country</Text>
//                 <View style={styles.inputField}>
//                   <Text style={styles.inputPlaceholder}>Select Country</Text>
//                 </View>
//               </View>
//             </View>

//             <TouchableOpacity style={styles.submitButton}>
//               <Text style={styles.submitButtonText}>Submit Form →</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Section 5: Debug / Developer Info */}
//         <View style={styles.debugSection}>
//           <Text style={styles.debugTitle}>🛠️ Device & Screen Information</Text>
//           <View style={styles.debugGrid}>
//             <View style={styles.debugItem}>
//               <Text style={styles.debugLabel}>Platform</Text>
//               <Text style={styles.debugValue}>{Platform.OS}</Text>
//             </View>
//             <View style={styles.debugItem}>
//               <Text style={styles.debugLabel}>OS Version</Text>
//               <Text style={styles.debugValue}>{Platform.Version}</Text>
//             </View>
//             <View style={styles.debugItem}>
//               <Text style={styles.debugLabel}>Screen Size</Text>
//               <Text style={styles.debugValue}>{Math.round(width)} × {Math.round(height)}</Text>
//             </View>
//             <View style={styles.debugItem}>
//               <Text style={styles.debugLabel}>Pixel Density (Scale)</Text>
//               <Text style={styles.debugValue}>
//                 {Math.round(Dimensions.get('window').scale * 10) / 10}
//               </Text>
//             </View>
//           </View>
//         </View>

//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <View style={[
//         styles.bottomNav,
//         orientation === 'landscape' && styles.bottomNavLandscape
//       ]}>
//         {[
//           { icon: '🏠', label: 'Home' },
//           { icon: '🔍', label: 'Search' },
//           { icon: '❤️', label: 'Likes' },
//           { icon: '👤', label: 'Profile' },
//         ].map((item, index) => (
//           <TouchableOpacity key={index} style={styles.navItem}>
//             <Text style={styles.navIcon}>{item.icon}</Text>
//             {/* Labels sirf bade screens pe dikhao (tablet/large phone) */}
//             {width > 400 && <Text style={styles.navLabel}>{item.label}</Text>}
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// // ────────────────────────────────────────────────
// // Styles (StyleSheet.create se performance behtar hoti hai)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FF', // Light background sab sections ke liye
//   },

//   // Header + Landscape adjustment
//   header: {
//     backgroundColor: '#6C63FF',
//     paddingTop: Platform.OS === 'ios' ? 50 : (StatusBar.currentHeight ?? 0) + 10,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 8,
//   },
//   headerLandscape: {
//     paddingTop: Platform.OS === 'ios' ? 20 : (StatusBar.currentHeight ?? 0),
//     paddingBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FFF',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   chipContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     margin: 5,
//   },
//   chipText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },

//   // Common section title style
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2D3436',
//     marginBottom: 15,
//     marginLeft: 20,
//   },

//   // Grid section
//   heroSection: { marginTop: 20 },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   gridContainerLandscape: { paddingHorizontal: 40 },
//   gridItem: {
//     aspectRatio: 1, // Square banane ke liye
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   gridItemText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },

//   // Cards section
//   cardSection: { marginTop: 20 },
//   cardRow: { flexDirection: 'row', paddingHorizontal: 10 },
//   card: {
//     borderRadius: 20,
//     padding: 20,
//     marginRight: 15,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//     minHeight: 250,
//   },
//   cardIcon: { fontSize: 40, marginBottom: 10 },
//   cardTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 5 },
//   cardPrice: { fontSize: 32, fontWeight: 'bold', color: '#FFF' },
//   cardPeriod: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 15 },
//   cardButton: {
//     backgroundColor: 'rgba(255,255,255,0.3)',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 25,
//     marginTop: 10,
//   },
//   cardButtonText: { color: '#FFF', fontWeight: 'bold' },

//   // Stats section
//   statsSection: { marginTop: 30 },
//   statsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//   },
//   statsContainerLandscape: { paddingHorizontal: 40 },
//   statItem: {
//     backgroundColor: '#FFF',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 15,
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   statIcon: { fontSize: 30, marginBottom: 5 },
//   statValue: { fontSize: 24, fontWeight: 'bold', color: '#2D3436' },
//   statLabel: { fontSize: 14, color: '#636E72', marginTop: 5 },

//   // Form section
//   formSection: { marginTop: 30, marginBottom: 20 },
//   formContainer: {
//     backgroundColor: '#FFF',
//     borderRadius: 20,
//     padding: 20,
//     marginHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   formContainerLandscape: {
//     maxWidth: 600,
//     alignSelf: 'center',
//     width: '100%',
//   },
//   inputGroup: { marginBottom: 15 },
//   inputLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#2D3436',
//     marginBottom: 5,
//     marginLeft: 5,
//   },
//   inputField: {
//     backgroundColor: '#F5F6FA',
//     borderRadius: 12,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   inputPlaceholder: { color: '#A0A0A0' },
//   rowInputs: { flexDirection: 'column' },
//   submitButton: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 12,
//     padding: 18,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   submitButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   // Debug section
//   debugSection: {
//     marginHorizontal: 20,
//     marginBottom: 140, // Bottom nav ke liye space
//     backgroundColor: '#2D3436',
//     borderRadius: 15,
//     padding: 15,
//   },
//   debugTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 10,
//   },
//   debugGrid: { flexDirection: 'row', flexWrap: 'wrap' },
//   debugItem: { width: '50%', padding: 10 },
//   debugLabel: { fontSize: 12, color: '#A0A0A0', marginBottom: 3 },
//   debugValue: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },

//   // Bottom Navigation
//   bottomNav: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#FFF',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   bottomNavLandscape: { paddingVertical: 5 },
//   navItem: { alignItems: 'center', paddingHorizontal: 15, paddingVertical: 5 },
//   navIcon: { fontSize: 24 },
//   navLabel: {
//     fontSize: 12,
//     color: '#6C63FF',
//     marginTop: 3,
//     fontWeight: '500',
//   },
// });

// export default App;

// import { View, Text, Button, ScrollView, Alert } from 'react-native';
// import Welcome from './components/Welcome';
// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   let increment = () => {
//     setCount(count + 1);
//   };
//   let decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     } else {
//       alert('Count cannot be negative');
//     }
//   };
//   useEffect(() => {
//     Alert.alert('Count Updated', `Current Count: ${count}`);
//     // ye jo mene useeffect ya banaya ye jab he chlaega jab count update hoga
//   }, [count]);

//   return (
//     <View>
//       <ScrollView>
//         <Welcome name="Rohit" age="27" />

//         <Welcome name="Rohan" age="20" />
//         <Welcome name="Mohan" age="29" />
//         <Welcome name="Abhishek" />

//         <Button
//           title="Click ME"
//           onPress={() => alert('button Pressed')} // This is correct way
//         />

//         {/* <View style={{marginTop:50}}>
//             <Button
//         title='Click ME'
//         onPress={ alert('Hello')}
        
//         />
//         </View> */}

//         <View style={{ marginTop: 50 }}>
//           <Text
//             style={{
//               marginTop: 50,
//               padding: 50,
//               fontWeight: 'bold',
//               fontSize: 25,
//             }}
//           >
//             {count}
//           </Text>
//           <Button title="Increase" onPress={() => setCount(count + 1)} />
//           <View style={{ marginTop: 20 }}>
//             <Button title="Decrease" onPress={() => setCount(count - 1)} />
//           </View>

//           {/* <Button
//           title='Increase'
//           onPress={increment}
          
//           />
//           <View style={{marginTop:20}}>
//             <Button
//               title='Decrease'
//               onPress={decrement}
//             />
//           </View> */}


          
//         </View>
//       </ScrollView>
//     </View>
//   );
// };




// export default App;




// import { View, Text , Button, ActivityIndicator} from 'react-native'
// import React, { useEffect, useState } from 'react'

// const App = () => {
// const [data,setData] = useState(null); // jo bi data api se ayega wo yha pr store hogs
// const [loading,setLooading] = useState(true) // api call hone ke time pe loading true rhega aur jab data aa jayega to loading false kr denge
// const [error,setError] = useState(null) // agar api call me koi error aata hai to usko yha pr store kr denge
// // useEffect kya krta h 
// // useEffect ke andar jo function likhte hai wo component ke lifecycle ke hisab se chalta hai
// useEffect(()=>{
//    const fetchData = async()=>{
//     try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/5')
//       if(!response.ok){
//         throw new Error('Network response was not ok') // agar api call me error aata hai to usko yha pr store kr denge
//       }
//       const json  = await response.json() // api se data json format me aayega usko yha pr parse kr denge
//       setData(json) // api se data aane ke baad usko yha pr store kr denge
//       setLooading(false) // api call hone ke time pe loading true rhega aur jab data aa jayega to loading false kr denge
//     }catch(error){
//       setError(error.message) // agar api call me error aata hai to usko yha pr store kr denge
//       setLooading(false) // api call hone ke time pe loading true rhega aur jab data aa jayega to loading false kr denge
//     }
//    }
//    fetchData() // api call krne ke liye fetchData function ko call kr denge
// },[]) // empty dependency array dene se useEffect sirf component mount hone pe chlaega
// // mount hone pr chlega mtlb iska mtlb h ki jab component pehli baar screen pr render hoga tabhi useEffect chlaega aur api call krke data fetch kr lega
// // agr mein empt array nhi deta to useEffect har render ke baad chlaega aur api call krke data fetch krta rahega jo ki galat h
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <ActivityIndicator size="large" color="#0000ff" animating={loading} />
//       {error && <Text style={{color:'red'}}>Error: {error}</Text>}
//       {data && (
//         <View style={{marginTop:20}}>
//           <Text style={{fontSize:18,fontWeight:'bold'}}>ID: {data.id}</Text>
//           <Text style={{fontSize:18,fontWeight:'bold'}}>Title: {data.title}</Text>
//           <Text>Completed: {data.completed ? 'Yes' : 'No'}</Text>
//         </View>
//       )}
//     </View>
//   )
// }

// export default App





// Simple Styles (thoda sundar dikhega)


/*

useEffect aur Condtional Rendering ye dono react native ke real apps banane ke liye must hai 
useEffect kya krta hai wo side effect ko handle krta hai jese ki api call krna, event listener lagana, timers set krna, etc.
useEffect ke andar jo function likhte hai wo component ke lifecycle ke hisab se chalta hai 
jese ki component mount hone pe, update hone pe, aur unmount hone pe
useEffect ke andar agar hum empty dependency array [] dete hai to wo function sirf component mount hone pe chalta hai 
agar hum dependency array me koi variable dete hai to wo function us variable ke change hone pe chalta hai 
agar hum dependency array me kuch bhi nhi dete hai to wo function har render ke baad chalta hai
useEffect (()=>{
  // side effect code yaha likho
  // optional cleanup function return kar sakte hai
},[dependencies]) ye api se data fetch krne ke liye use hota hai
useEffect ke andar hum cleanup function bhi return kar sakte hai jo component unmount hone pe ya dependency change hone pe chalta hai 
cleanup function me hum event listener remove kar sakte hai, timers clear kar sakte hai, etc.
{isLoggedIn ? <Text>Welcome Back!</Text> : <Text>Please Log In</Text>} ye conditional rendering ka example hai
conditional rendering me hum ternary operator ya logical && operator ka use kar sakte hai 
conditional rendering se hum apne UI ko dynamic bana sakte hai jese ki user ke login status ke hisab se alag alag content dikhana
{error && <Text style={{color:'red'}}>Error: {error}</Text>} ye logical && operator ka example hai jisme error variable true hone par hi error message dikhaya jayega
if (isLoggedIn) {
  return <Text>Welcome Back!</Text>;
} else {
  return <Text>Please Log In</Text>;
} ye bhi conditional rendering ka example hai jisme if else statement ka use kiya gaya hai
 Async-await is a modern way to handle asynchronous operations in javascript that allows 
 us to write asynchronous code in a more synchronous and readable manner making the 
 code more redable and easier to understand
 javascript single threase lang hoti hai 
 ek time pe ek hi task execute hota hai
 Agar HUM API CSLL Databse Fetch File reading Time 
 jaise time consuming task perform krna chahte hai to hum async-await ka use karte hai
*/
// import { View, Text, FlatList, SectionList, StyleSheet, TextInput, Button } from 'react-native';
// import React, { useState, useEffect } from 'react';


// export default function App() {
  // task manage krne ke liye hume ek useState hook ki zarurat hoti hai jisme hum loading state ko manage kar sakte hai
  // Taks ko arrya mein store krne ke liye hume useState hook ki need hogi 
  // pheli bar loading true hoga aur jab data fetch ho jayega to loading false kr denge
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading completion after 2 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

//   if(loading){
//  return (
//     // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     //   <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello, React Native!</Text>
//     //   <Text style={{ fontSize: 16, color: 'gray', marginTop: 10 }}>Welcome to the world of mobile development.</Text>
//     // </View>
    
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Loading...</Text>
//     </View> 
//   );
//   }
// const Users = [
//   { id: '1', name: 'Alice' },
//   { id: '2', name: 'Bob' },
//   { id: '3', name: 'Charlie' },
//   { id: '4', name: 'David' },
//   { id: '5', name: 'Eve' },
// ]

// const sections= [
//   {title:"Fruits",data:["Apple","Banana","Orange"]},
//   {title:"Vegetables",data:["Carrot","Broccoli","Spinach"]},
//   {title:"Dairy",data:["Milk","Cheese","Yogurt"]},
// ]
// let [task,setTask] = useState('') /// ye inpute se text leke ayega 
// let [tasks,setTasks] = useState([]) // ye task ko array me store karega
// const [loading,setLoading] = useState(true) // ye loading state ko manage karega
// useEffect(()=>{
//   const timer = setTimeout(()=>{
//     setLoading(false)
//   },2000)
//   return ()=> clearTimeout(timer)
// },[]) // ye h depency kyu use ki kyu ki hum chahte hai ki jab component mount ho to loading true ho aur 2 second ke baad loading false ho jaye isliye hum empty dependency array use karte hai taki ye effect sirf ek baar chale

// // Add New Tasks
// let addTask = ()=>{
//   if(task.trim() === ''){
//     alert('Task Empty mat use kro')
//     return
//   }

//   let newTask = {
//     id: Date.now().toString(),
//     title: task.trim(),
//   }

//   setTasks([...tasks, newTask])
//   setTask('')
// }

// // Delete Task
// const deleteTask = (id)=>{
//   setTasks(tasks.filter(task=> task.id !== id))
// }
// // UI rendering 
// if(loading){
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:24,fontWeight:'bold'}}>Loading...</Text>
//     </View>
//   )
// }
// return(
//   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     {/* Header */}
//     <Text style={{fontSize:24,fontWeight:'bold'}}>To-Do List</Text>
//     <Text style={{fontSize:16, color:'gray', marginTop:10}}>Total Tasks: {tasks.length}</Text>
//     {/* Input Button */}
//     <TextInput
//       style={{width:'80%', height:40, borderColor:'gray', borderWidth:1, marginTop:20}}
//       placeholder="Enter Task"
//       value={task}
//       onChangeText={setTask}/>
//     <Button title='Add Task' color="tomato" onPress={addTask}/>
    
//     {/* Condtional List  */}
//     {tasks.length === 0 ? (
//       <Text style={{fontSize:18, color:'gray', marginTop:20}}>No Tasks Found</Text>
//     ) : (
//       <FlatList
//         data={tasks}
//         keyExtractor={item => item.id}
//         renderItem={({item})=>(
//           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'80%', padding:10, borderBottomWidth:1, borderColor:'lightgray'}}>
//             <Text style={{fontSize:18}}>{item.title}</Text>
//              <Text style={{fontSize:18}}>{item.id}</Text>
//             <Button title='Delete' color="red" onPress={()=> deleteTask(item.id)}/>
//           </View>
//         )}
//       />
//     )}  
//   </View>
// );






// const styles = StyleSheet.create({

// });


// conditional rendering kya hota hai
// conditional rendering me hum apne UI ko dynamic bana sakte hai jese ki user ke login status ke hisab se alag alag content dikhana
// {isLoggedIn ? <Text>Welcome Back!</Text> : <Text>Please Log In</Text>} ye conditional rendering ka example hai
// loading spinner jab data fetch ho rha ho to 
// No taska Found jab data nhi mile to
// Login ke bad Welcome Back! dikhana
// Error message dikhana jab api call me error aata hai
// what is flatlist in react native
// FlatList ek component hai jo large lists ko efficiently render karne ke liye use hota hai
// FlatList virtualized list hoti hai jisme sirf screen par visible items hi render hote hai aur baaki items memory me store hote hai
// FlatList ke andar data prop me array of items pass karte hai aur renderItem prop me ek function pass karte hai jo har item ko render karta hai
// FlatList ke andar keyExtractor prop me ek function pass karte hai jo har item ke liye unique key return karta hai
// FlatList ke andar horizontal prop set karne se list horizontal scrollable ban jati hai
// FlatList ke andar numColumns prop set karne se list grid format me render hoti hai
// }










// Notes Managment app 
/* if (loading){
return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:24,fontWeight:'bold'}}>Loading...</Text>
  </View>
) 
} 
Ternary Operator
{notes.length === 0 ?(
  <Text style={{fontSize:18, color:'gray', marginTop:20}}>No Notes Found</Text>
) : (
  <FlatList
    data={notes}
    keyExtractor={item => item.id}
})
    && Operator
{error && <Text style={{color:'red'}}>Error: {error}</Text>}
<FlatList
data={notes}
keyExtractor={item => item.id}
renderItem={({item})=>(
  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'80%', padding:10, borderBottomWidth:1, borderColor:'lightgray'}}>
    <Text style={{fontSize:18}}>{item.title}</Text>
     <Text style={{fontSize:18}}>{item.id}</Text>
    <Button title='Delete' color="red" onPress={()=> deleteNote(item.id)}/>
  </View>
)}
/>

*/

// import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'

// function NoteCard(props){
//   return(
//     <View style={styles.card}>
//       <Text style={styles.noteText}>{props.note}</Text> 
//       <Button
//       title='Delete'
//       color='red'
//       onPress={props.onDelete} // Ye wala jo function ye parent componnent se a rha h 
      
      
//       />
// {/* 
//  <Text style={styles.noteText}>{props.note}</Text> // ye note text ko display karega jo parent component se a rha h */}


//     </View>
//   )
// }

// export default function App() {
//   const [note, setNote] = useState('') // ye note input se text leke ayega
//   const [notes, setNotes] = useState([]) // ye notes ko array me store karega
//   const [loading, setLoading] = useState(true) // ye loading state ko manage karega

// useEffect(()=>{
//   setTimeout(()=>{
//     setLoading(false)
//   },2000)
// },[])

// const addNotes = ()=>{
//   if(note.trim() === '' ) return alert('Note cannot be empty') // agar note empty hai to alert dikhayega
//   const newNote = {
//     id: Date.now().toString(), // ye unique id generate karega
//     text:note.trim() // yha trim() use karne se note ke aage aur peeche ke extra spaces remove ho jayenge
//   }
//   setNotes([...notes, newNote]) // ye notes array me new note add karega
//   setNote('') // ye input field ko clear karega
// }
// const deleteNote = (id)=>{
//   setNotes(notes.filter(note => note.id !== id)) // ye notes array me se delete hone wale note ko remove karega
// }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>My Notes App</Text>

//     <TextInput
//     style={styles.input}
//     placeholder='Enter your note here'
//     value={note}
//     onChangeText={setNote}
//     />
//     <Button
//     title='Add Note'
//     color="tomato"
//     onPress={addNotes}
    
    
//     />
// {/* Yha se hodi apki conditonal Rendering */}
//     {loading ? (
//       <Text style={styles.loadingText}>Loading...</Text>
//     ) : notes.length === 0 ? (
//       <Text style={styles.noNotesText}>No Notes Found</Text>
//     ) : (
//       <FlatList
//       data={notes}
//       keyExtractor={item => item.id}
//       renderItem={({item})=>(
//         <NoteCard
//         note={item.text} // ye note text ko display karega jo parent component se a rha h
//         onDelete={()=> deleteNote(item.id)} // ye delete function ko call karega jab delete button press hoga
//         />
//       )}
//       />
//     )}
// {/* Yha mujhe ye dikha ki kitbne notes h  */}
// <Text style={styles.notesCountText}>{notes.length} Notes</Text>
//       </View>



// )


// }
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     padding:20,
//     backgroundColor:'#F8F9FF'
//   },
//   heading:{
//     fontSize:26,
//     fontWeight:'bold',
//     textAlign:'center',
//     marginTop:20,
//     color:'#2D3436'
//   },
//   input:{
//     borderWidth:1,
//     borderColor:'#ccc',
//     padding:10,
//     borderRadius:8,
//     marginTop:20,
//     marginBottom:10

//   },
//   card:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     backgroundColor:'#FFF',
//     padding:15,
//     borderRadius:10,
//     marginBottom:10,
//     shadowColor:'#000',
//     shadowOffset:{width:0, height:2},
    
//   },
//   noteText:{
//     fontSize:18,
//     color:'#2D3436',
//     flex:1,
//     marginRight:10
//   },
//   loadingText:{
//     fontSize:18,
//     color:'gray',
//     textAlign:'center',
//     marginTop:20
//   },
//   noNotesText:{
//     fontSize:18,
//     color:'gray',
//     textAlign:'center',
//     marginTop:20
//   },
//   notesCountText:{
//     fontSize:16,
//     color:'gray',
//     textAlign:'center',
//     marginTop:10
//   }
// })









// Navigation and Form Lecture part 8
// npm install react-hook-form yup @hookform/resolvers

// npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
// npx expo install react-native-screens react-native-safe-area-context

// TextInput placeholder="Enter Your Name"/>

// import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native'
// import React, { useState } from 'react'

// export default function LoginScreen() {
//   const [email, setEmail] = useState('') // ye email input se text leke ayega
//   const [password, setPassword] = useState('') // ye password input se text leke ayega


//   const handleSubmit = ()=>{
//     if(!email.includes('@')){
//       Alert.alert('Error','Please enter a valid email address')
//       return;
//     }
//     if(!email.trim() || !password.trim())
// {
//   Alert.alert('Error','Email and Password cannot be empty')
//   return;
// } 
// if(password.length < 6){
//   Alert.alert('Error','Password must be at least 6 characters long')
//   return;
// }

// Alert.alert('Success','Login Successful')
// // yha pr aap api bi call kr skte ho future hum yha api ko call krnge 
// }
//   return (
//     <View style={{flex:1, padding:20, justifyContent:'center', alignItems:'center', backgroundColor:'#F8F9FF'}}>
//     <TextInput
//     placeholder='Email'
//     value={email}
//     onChangeText={setEmail}
//     keyboardType='email-address'
//     autoCapitalize='none'
//     style={{width:'80%', height:40, borderColor:'gray', borderWidth:1, marginBottom:20, paddingHorizontal:10, borderRadius:8}}
    
//     />
//     <TextInput
//     placeholder='Password'
//     value={password}
//     onChangeText={setPassword}
//     secureTextEntry={true}
//     style={{width:'80%', height:40, borderColor:'gray', borderWidth:1, marginBottom:20, paddingHorizontal:10, borderRadius:8}}
    
//     />
//     <Button title='login Form' onPress={handleSubmit} color='#2D3436'/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})


/*
value = state variable jo input field ke value ko store karta hai
onChangeText = state variable ko update karne ke liye function jo input field ke text change hone par call hota hai
secureTextEntry = password field ke liye use hota hai jisme text ko dots me show karta hai
keyboardType = input field ke keyboard type ko set karne ke liye use hota hai jese ki email-address, numeric, etc.


*/

// import { StyleSheet, Text, View, Alert, TextInput, Button } from 'react-native'
// import React from 'react'
// import { yupResolver } from '@hookform/resolvers/yup' // ye yup validation schema ko react-hook-form ke sath integrate karne ke liye use hota hai
// import * as yup from 'yup' // ye validation schema banane ke liye use hota hai
// import { useForm, Controller } from 'react-hook-form' // useForm form state ko manage karne ke liye use hota hai aur Controller form fields ko react-hook-form ke sath connect karne ke liye use hota hai


// export default function LoginScreen() {
//   const schema = yup.object().shape({
//     email: yup.string().email('Please enter a valid email address').required('Email is required'),
//     password: yup.string().min(6,'Password must be at least 6 characters long').required('Password is required')
//   })

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   }) // ye useForm hook ke andar resolver me yupResolver pass karne se hum apne validation schema ko react-hook-form ke sath integrate kar sakte hai
//   const onSubmit  = (data)=>{
//     console.log(data) // ye form data ko console me print karega jab form submit hoga
//     Alert.alert('Success','Login Successful')
//   }
//   return (
//     <View style={{flex:1, padding:20, justifyContent:'center', alignItems:'center', backgroundColor:'#F8F9FF'}}>
//       {/* Email Input */}
//       <Controller
//       control={control}
//       name='email'
//       render={({field:{onChange, value}})=>(
//         <TextInput
//         placeholder='Email'
//         value={value}
//         onChangeText={onChange}
//         keyboardType='email-address'
//         autoCapitalize='none'
//         style={{width:'80%', height:40, borderColor: errors.email ? 'red' : 'gray', borderWidth:1, marginBottom:5, paddingHorizontal:10, borderRadius:8}}
        
//         />
//       )}
      
//       />
//       {errors.email && (
//         <Text style={{color:'red', alignSelf:'flex-start', marginLeft:40}}>{errors.email.message}</Text>
//       )}
//       {/* Password Input */}
//       <Controller
//       control={control}
//       name='password'
//       render={({field:{onChange, value}})=>(
//         <TextInput
//         placeholder='Password'
//         value={value}
//         onChangeText={onChange}
//         secureTextEntry={true}
//         style={{width:'80%', height:40, borderColor: errors.password ? 'red' : 'gray', borderWidth:1, marginBottom:5, paddingHorizontal:10, borderRadius:8}}
        
//         />
//       )}
      
//       />
//       {errors.password && (
//         <Text style={{color:'red', alignSelf:'flex-start', marginLeft:40}}>{errors.password.message}</Text>
//       )}
//       <Button title='Login Form' onPress={handleSubmit(onSubmit)} color='#2D3436'/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

/*
Yup schema se rules automatic check hote
Control component se hum apne input fields ko react-hook-form ke sath connect karte hai
errors object se meesage direct show ho jata h 
accha isme or simple form kya difference h ki isme hum apne form ke rules ko ek jagah define kar sakte hai aur wo rules automatic check hote hai jab form submit hota hai
or simple form me hume manually validation karna padta hai jab form submit hota hai jese ki email me @ hona chahiye, password minimum 6 characters ka hona chahiye, etc.
accha yupresolver kya krta h ki wo yup validation schema ko react-hook-form ke sath integrate karne ke liye use hota hai taki hum apne form ke rules ko ek jagah define kar sake aur wo rules automatic check hote rahe jab form submit hota hai
accha yha hum useState ka use kyu nhi kr rhe h ki form ke state ko manage karne ke liye useForm hook ka use kr rhe h jo react-hook-form ka part hai aur wo form state ko efficiently manage karta hai jese ki input values, errors, etc.

*/