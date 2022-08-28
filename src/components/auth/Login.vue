<template>
	<div class="h-screen w-full bg-blue-300 flex justify-center items-center">
		<div class="w-96 h-96 bg-white rounded-lg shadow-2xl p-5">
			<div class="flex items-end">
				<img
					src="@/assets/Logo.png"
					class="w-14"
				/>
				<h2 class="mb-0">Shop.com.vn</h2>
			</div>
			<a-form
				layout="vertical"
				class="!mt-10"
			>
				<a-form-item label="Số Điện Thoại">
					<a-input type="tel" />
				</a-form-item>
				<a-form-item label="Mật khẩu">
					<a-input type="password" />
				</a-form-item>
				<a-button type="primary w-full">Đăng Nhập</a-button>
			</a-form>
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped></style>
