import React from "react";
import { Box, Heading, Text, Image, Button, Flex, SimpleGrid, Container } from "@chakra-ui/react";
import { FaShieldAlt, FaLaptopCode, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* 头部导航 */}
      <Box as="header" bg="gray.800" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" color="white" size="lg">
              网安科技
            </Heading>
            <Flex color="white">
              <Text mx={4}>首页</Text>
              <Text mx={4}>产品</Text>
              <Text mx={4}>解决方案</Text>
              <Text mx={4}>合作伙伴</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Banner */}
      <Box bgImage="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTcxMjMwMzg3NXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" py={32} textAlign="center">
        <Heading as="h2" size="2xl" mb={4} color="white">
          专注网络安全防护
        </Heading>
        <Text fontSize="xl" color="white">
          提供先进的安全防火墙和整体解决方案，保障您的网络安全
        </Text>
      </Box>

      {}
      <Box py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={2} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1496851473196-e26508c21494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzEyMzEwMDgwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="公司大楼" />
            </Box>
            <Box>
              <Text mb={4}>网安科技成立于2010年，是一家专注于网络安全领域的国家高新技术企业。多年来，公司始终坚持自主创新，拥有一支由资深安全专家和技术精英组成的研发团队，致力于为客户提供先进可靠的网络安全产品和解决方案。</Text>

              <Text mb={4}>我们深耕网络安全领域，产品线涵盖安全防火墙、入侵检测与防御、安全态势感知、云安全、工业互联网安全、物联网安全等诸多方向。凭借业界领先的安全技术和成熟的产品体系，网安科技为政府、金融、运营商、能源、交通、制造等行业用户提供全方位的安全防护。</Text>

              <Text mb={4}>网安科技以"让网络世界更安全"为己任，将不断突破创新，用优异的产品和服务帮助客户应对各种网络安全挑战。通过与产业链伙伴紧密合作，我们携手共建网络安全生态，为数字经济高质量发展保驾护航。</Text>

              <Text>展望未来，网安科技将继续专注于网络安全核心技术研究，加大创新投入，强化产品能力，完善安全服务体系，致力于成为受人尊敬的网络安全公司。我们将一如既往地为客户的网络安全保驾护航，为构建安全可信的数字世界贡献力量。</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 产品展示 */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            我们的产品
          </Heading>
          <SimpleGrid columns={3} spacing={8}>
            <Box bg="white" p={8} textAlign="center" shadow="md">
              <FaShieldAlt size="4em" color="blue.600" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                新一代防火墙
              </Heading>
              <Text>性能强劲，深度防护，全面阻断威胁</Text>
            </Box>
            <Box bg="white" p={8} textAlign="center" shadow="md">
              <FaLaptopCode size="4em" color="blue.600" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                Web应用防护
              </Heading>
              <Text>专业防护网站及Web应用，抵御应用层攻击</Text>
            </Box>
            <Box bg="white" p={8} textAlign="center" shadow="md">
              <FaShieldAlt size="4em" color="blue.600" />
              <Heading as="h3" size="lg" mt={4} mb={2}>
                云安全防护
              </Heading>
              <Text>一站式云上安全防护，保障业务稳定运行</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 解决方案 */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            行业解决方案
          </Heading>
          <SimpleGrid columns={2} spacing={8}>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                金融行业安全解决方案
              </Heading>
              <Text mb={4}>针对银行、证券、保险等金融机构的特点，提供全面合规的安全防护体系，守护金融网络和数据安全。</Text>
              <Button colorScheme="blue">了解更多</Button>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                政府行业安全解决方案
              </Heading>
              <Text mb={4}>满足等保合规要求，提供覆盖政府门户网站、内网等场景的整体安全防护，保障政务系统安全稳定运行。</Text>
              <Button colorScheme="blue">了解更多</Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 合作伙伴 */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            合作伙伴
          </Heading>
          <SimpleGrid columns={4} spacing={8}>
            <Image src="https://images.unsplash.com/photo-1580030962278-d5281d09b1e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3MTIzMTAwODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="合作伙伴logo" />
            <Image src="https://images.unsplash.com/photo-1646343251574-a7b03ee3dbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3MTIzMTAwODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="合作伙伴logo" />
            <Image src="https://images.unsplash.com/photo-1646343253681-eaafc374b2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3MTIzMTAwODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="合作伙伴logo" />
            <Image src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3MTIzMTAwODB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="合作伙伴logo" />
          </SimpleGrid>
          <Box mt={8} textAlign="center">
            <Button leftIcon={<FaHandshake />} colorScheme="blue" size="lg">
              成为合作伙伴
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 底部 */}
      <Box as="footer" bg="gray.800" py={8} textAlign="center" color="white">
        <Text>© 2023 网安科技 版权所有</Text>
      </Box>
    </Box>
  );
};

export default Index;
