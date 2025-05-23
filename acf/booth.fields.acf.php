<?php
add_action( 'acf/include_fields', function() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
			return;
		}

		acf_add_local_field_group( array(
		'key' => 'group_65f998746238e',
		'title' => 'Booth',
		'fields' => array(
			array(
				'key' => 'field_65f99874481bf',
				'label' => 'Booth Type',
				'name' => 'booth_type',
				'aria-label' => '',
				'type' => 'radio',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'choices' => array(
					'b' => 'Exhibitor (b)',
					'i' => 'Info (i)',
					'a' => 'Arena (a)',
					'z' => 'Zone (z)',
				),
				'default_value' => '',
				'return_format' => 'value',
				'allow_null' => 0,
				'other_choice' => 0,
				'layout' => 'horizontal',
				'save_other_choice' => 0,
			),
			array(
				'key' => 'field_65f99978481c0',
				'label' => 'Exhibitor',
				'name' => 'exhibitor',
				'aria-label' => '',
				'type' => 'group',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_65f99874481bf',
							'operator' => '==',
							'value' => 'b',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_65f9a323670a2',
						'label' => 'Logo',
						'name' => 'logo',
						'aria-label' => '',
						'type' => 'image',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'return_format' => 'url',
						'library' => 'all',
						'min_width' => '',
						'min_height' => '',
						'min_size' => '',
						'max_width' => '',
						'max_height' => '',
						'max_size' => '',
						'mime_types' => '',
						'preview_size' => 'medium',
					),
					array(
						'key' => 'field_65f9a338670a3',
						'label' => 'Beschreibungstext',
						'name' => 'beschreibungstext',
						'aria-label' => '',
						'type' => 'wysiwyg',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'tabs' => 'all',
						'toolbar' => 'basic',
						'media_upload' => 0,
						'delay' => 0,
					),
					array(
						'key' => 'field_67f7c8bf5e23d',
						'label' => 'Kontaktperson',
						'name' => 'kontaktperson',
						'aria-label' => '',
						'type' => 'group',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'layout' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_65f9a360670a4',
								'label' => 'Name',
								'name' => 'kontaktperson',
								'aria-label' => '',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'maxlength' => '',
								'allow_in_bindings' => 1,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
							array(
								'key' => 'field_65f9a373670a5',
								'label' => 'Kontaktperson Verlinkung',
								'name' => 'kontaktperson_verlinkung',
								'aria-label' => '',
								'type' => 'url',
								'instructions' => 'B2Match Link',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_65f9a360670a4',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'allow_in_bindings' => 1,
								'placeholder' => '',
							),
							array(
								'key' => 'field_67f7c9335e23e',
								'label' => 'LinkedIn',
								'name' => 'linkedin',
								'aria-label' => '',
								'type' => 'link',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_65f9a360670a4',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'return_format' => 'url',
								'allow_in_bindings' => 0,
							),
							array(
								'key' => 'field_67f7c9565e23f',
								'label' => 'E-Mail',
								'name' => 'email',
								'aria-label' => '',
								'type' => 'email',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_65f9a360670a4',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'allow_in_bindings' => 0,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
							array(
								'key' => 'field_67f7c96c5e240',
								'label' => 'Twitter',
								'name' => 'twitter',
								'aria-label' => '',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_65f9a360670a4',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'maxlength' => '',
								'allow_in_bindings' => 0,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
						),
					),
					array(
						'key' => 'field_65f9a384670a6',
						'label' => 'Webseite',
						'name' => 'webseite',
						'aria-label' => '',
						'type' => 'url',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'placeholder' => '',
					),
				),
			),
			array(
				'key' => 'field_65f99993481c1',
				'label' => 'Info',
				'name' => 'info',
				'aria-label' => '',
				'type' => 'group',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_65f99874481bf',
							'operator' => '==',
							'value' => 'i',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_6644b6e861162',
						'label' => 'Image',
						'name' => 'image',
						'aria-label' => '',
						'type' => 'image',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'return_format' => 'url',
						'library' => 'all',
						'min_width' => '',
						'min_height' => '',
						'min_size' => '',
						'max_width' => '',
						'max_height' => '',
						'max_size' => '',
						'mime_types' => '',
						'preview_size' => 'medium',
					),
					array(
						'key' => 'field_65f9a39f670a7',
						'label' => 'Description',
						'name' => 'description',
						'aria-label' => '',
						'type' => 'wysiwyg',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'tabs' => 'all',
						'toolbar' => 'basic',
						'media_upload' => 0,
						'delay' => 0,
					),
					array(
						'key' => 'field_67fe24e98e48b',
						'label' => 'Webseite',
						'name' => 'webseite',
						'aria-label' => '',
						'type' => 'url',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'allow_in_bindings' => 1,
						'placeholder' => '',
					),
				),
			),
			array(
				'key' => 'field_65f999a2481c2',
				'label' => 'Arena',
				'name' => 'arena',
				'aria-label' => '',
				'type' => 'group',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_65f99874481bf',
							'operator' => '==',
							'value' => 'a',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_67fe250e8e48c',
						'label' => 'Logo',
						'name' => 'logo',
						'aria-label' => '',
						'type' => 'image',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'return_format' => 'url',
						'library' => 'all',
						'min_width' => '',
						'min_height' => '',
						'min_size' => '',
						'max_width' => '',
						'max_height' => '',
						'max_size' => '',
						'mime_types' => '',
						'allow_in_bindings' => 1,
						'preview_size' => 'medium',
					),
					array(
						'key' => 'field_6617e1451fc8e',
						'label' => 'Description',
						'name' => 'description',
						'aria-label' => '',
						'type' => 'wysiwyg',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'tabs' => 'all',
						'toolbar' => 'basic',
						'media_upload' => 0,
						'delay' => 0,
					),
					array(
						'key' => 'field_67fe3eacf4b99',
						'label' => 'Kontaktperson',
						'name' => 'kontaktperson',
						'aria-label' => '',
						'type' => 'group',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'layout' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_67fe3eacf4b9a',
								'label' => 'Name',
								'name' => 'kontaktperson',
								'aria-label' => '',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'maxlength' => '',
								'allow_in_bindings' => 1,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
							array(
								'key' => 'field_67fe3eacf4b9b',
								'label' => 'Kontaktperson Verlinkung',
								'name' => 'kontaktperson_verlinkung',
								'aria-label' => '',
								'type' => 'url',
								'instructions' => 'B2Match Link',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_67fe3eacf4b9a',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'allow_in_bindings' => 1,
								'placeholder' => '',
							),
							array(
								'key' => 'field_67fe3eacf4b9c',
								'label' => 'LinkedIn',
								'name' => 'linkedin',
								'aria-label' => '',
								'type' => 'link',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_67fe3eacf4b9a',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'return_format' => 'url',
								'allow_in_bindings' => 0,
							),
							array(
								'key' => 'field_67fe3eacf4b9d',
								'label' => 'E-Mail',
								'name' => 'email',
								'aria-label' => '',
								'type' => 'email',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_67fe3eacf4b9a',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'allow_in_bindings' => 0,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
							array(
								'key' => 'field_67fe3eacf4b9e',
								'label' => 'Twitter',
								'name' => 'twitter',
								'aria-label' => '',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => array(
									array(
										array(
											'field' => 'field_67fe3eacf4b9a',
											'operator' => '!=empty',
										),
									),
								),
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'maxlength' => '',
								'allow_in_bindings' => 0,
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
							),
						),
					),
					array(
						'key' => 'field_67fe24748e488',
						'label' => 'Webseite',
						'name' => 'webseite',
						'aria-label' => '',
						'type' => 'url',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'allow_in_bindings' => 1,
						'placeholder' => '',
					),
				),
			),
			array(
				'key' => 'field_65f999b3481c3',
				'label' => 'Zone',
				'name' => 'zone',
				'aria-label' => '',
				'type' => 'group',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => array(
					array(
						array(
							'field' => 'field_65f99874481bf',
							'operator' => '==',
							'value' => 'z',
						),
					),
				),
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_65f9a3cb0aecd',
						'label' => 'Description',
						'name' => 'description',
						'aria-label' => '',
						'type' => 'wysiwyg',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'tabs' => 'all',
						'toolbar' => 'basic',
						'media_upload' => 0,
						'delay' => 0,
					),
					array(
						'key' => 'field_67fe24ac8e489',
						'label' => 'Webseite',
						'name' => 'webseite',
						'aria-label' => '',
						'type' => 'url',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => '',
						'allow_in_bindings' => 1,
						'placeholder' => '',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'booth',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'seamless',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 1,
) );
} );
